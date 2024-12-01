import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { validateUserToLogin } from 'src/models/schemas/userSchema';
import { getUserByEmail } from 'src/models/userModel';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

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
      const user = await getUserByEmail(loginValidated.data.email);
      if (!user) {
        return res.status(400).json({
          error: 'Email ou senha inválida! (email não encontrado)',
        });
      }

      //Comparar a senha enviada com o hash armazenado
      const passValid = bcrypt.compareSync(
        loginValidated.data.password,
        user.password,
      );

      if (!passValid) {
        return res.status(400).json({
          error: 'Email ou senha inválida! (senha inválida)',
        });
      }

      const token = jwt.sign(
        { name: user.name, publicID: user.public_id },
        SECRET_KEY,
        { expiresIn: 60 * 5 },
      );

      console.log(token);
      return res.json({ token });
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(400).json({ error: 'ERRO' });
      }
    }
  }
}
