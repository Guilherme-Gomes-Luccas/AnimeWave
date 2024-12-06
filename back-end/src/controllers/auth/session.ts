import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

@Controller('session')
export class SessionController {
  @Get()
  async getSession(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Não autorizado! Token não encontrado',
      });
    }

    try {
      verify(token, process.env.TOKEN_KEY);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({
        error: error.message,
        message: 'Não autorizado! Token inválido',
      });
    }
  }
}
