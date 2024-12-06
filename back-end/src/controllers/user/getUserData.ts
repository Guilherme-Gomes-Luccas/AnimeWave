import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

@Controller('get-user')
export class GetUserDataController {
  @Get()
  async getUserData(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization.split(' ')[1];

    try {
      const user = verify(token, process.env.TOKEN_KEY);

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(401).json({
        error: error.message,
        message: ' Não autorizado! Token inválido',
      });
    }
  }
}
