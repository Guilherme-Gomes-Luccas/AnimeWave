import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/google-auth-guard';
import { Request, Response } from 'express';

@Controller('auth/google')
export class LoginGoogleController {
  @UseGuards(GoogleAuthGuard)
  @Get('login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('callback')
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    res.redirect('http://localhost:3000/');
  }
}
