import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { validateUserToLogin } from 'src/models/schemas/userSchema';
import { getUserByEmail, updateUserData } from 'src/models/userModel';
import * as bcrypt from 'bcrypt';
import { generateAccessToken } from './config/generateAccessToken';
import { generateRefreshToken } from './config/generateRefreshToken';
import { User } from 'src/models/userInterface';

@Controller('login')
export class LoginUser {
  @Post()
  async login(@Req() req: Request, @Res() res: Response) {
    try {
      const login = req.body;
      const loginValidated = validateUserToLogin(login);

      if (loginValidated?.error) {
        return res.status(400).json({
          error: 'Erro ao logar, verifique os dados',
          fieldErrors: loginValidated.error.flatten().fieldErrors,
        });
      }

      //Buscar user pelo email
      const response = await getUserByEmail(loginValidated.data.email);

      if (response === null) {
        return res.status(400).json({
          error: 'Email e/ou senha inválidos!',
        });
      }

      const accessToken = generateAccessToken(response);
      const refreshToken = generateRefreshToken(response);

      const user: User = {
        email: response.email,
        name: response.name,
        password: response.password,
        public_id: response.public_id,
        photo: response.photo,
        access_token: accessToken,
        refresh_token: refreshToken,
      };

      //Comparar a senha enviada com o hash armazenado
      const passValid = bcrypt.compareSync(
        loginValidated.data.password,
        user.password,
      );

      if (!passValid) {
        return res.status(400).json({
          error: 'Email e/ou senha inválidos!',
        });
      }

      await updateUserData(user);

      res.cookie('accessToken', accessToken, {
        httpOnly: false,
        sameSite: 'lax',
        secure: false,
        maxAge: 3600000,
        path: '/',
        domain: 'localhost',
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: false,
        sameSite: 'lax',
        secure: false,
        maxAge: 3600000,
        path: '/',
        domain: 'localhost',
      });

      return res.status(200).json({
        refreshToken,
        accessToken,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(400).json({ error: 'ERRO' });
      } else {
        res.status(400).json({ error });
      }
    }
  }
}
