import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { updateUserData, verifyRefreshToken } from 'src/models/userModel';
import { generateAccessToken } from './config/generateAccessToken';

@Controller('refresh')
export class RefreshController {
  @Post()
  async refresh(@Req() req: Request, @Res() res: Response) {
    const token = req.body.refreshToken;
    if (!token) {
      return res.status(401).json({
        message: 'Não autorizado! Token não encontrado',
      });
    }

    try {
      const public_id = verify(token, process.env.TOKEN_KEY).sub;

      if (!public_id) {
        console.log('aaaaa');
        return res.status(401).json({
          message: ' Não autorizado! Token inválido',
        });
      }

      const refreshTokenUser = await verifyRefreshToken(
        token,
        <string>public_id,
      );

      if (!refreshTokenUser) {
        return res.status(401).json({
          message: 'Não autorizado! Refresh Token inválido',
        });
      }

      const newAccessToken = generateAccessToken(refreshTokenUser);

      refreshTokenUser.access_token = newAccessToken;
      await updateUserData(refreshTokenUser);

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 3600000,
        path: '/',
        domain: 'localhost',
      });

      return res.status(200).json({
        message: 'Token atualizado com sucesso',
        accessToken: newAccessToken,
      });
    } catch (error) {
      return res.status(401).json({
        error: error.message,
        message: ' Não autorizado! Token inválido',
      });
    }
  }
}
