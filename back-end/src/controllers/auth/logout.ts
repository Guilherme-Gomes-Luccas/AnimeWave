import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/logout')
export class LogoutController {
  @Post()
  async logout(@Req() req: Request, @Res() res: Response) {}
}
