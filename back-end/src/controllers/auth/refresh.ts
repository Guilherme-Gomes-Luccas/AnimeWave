import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { updateUserData, verifyRefreshToken } from 'src/models/userModel';
import { generateAccessToken } from './config/generateAccessToken';

@Controller('refresh')
export class RefreshController {
  @Get()
  async refresh(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'Não autorizado! Token não encontrado',
      });
    }

    const public_id = verify(token, process.env.TOKEN_KEY).sub;

    const refreshTokenUser = await verifyRefreshToken(token, <string>public_id);

    if (!refreshTokenUser) {
      return res.status(401).json({
        message: 'Não autorizado! Refresh Token inválido',
      });
    }

    const newAccessToken = generateAccessToken(refreshTokenUser);

    refreshTokenUser.access_token = newAccessToken;
    await updateUserData(refreshTokenUser);

    console.log(newAccessToken);

    res.cookie('accessToken', newAccessToken, { path: '/' });
    res.status(200).json({
      message: 'Token atualizado com sucesso',
      accessToken: newAccessToken,
    });
  }
}
