import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/google-auth-guard';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { User } from 'src/models/userInterface';
import { updateUserData } from 'src/models/userModel';

@Controller('auth/google')
export class LoginGoogleController {
  @UseGuards(GoogleAuthGuard)
  @Get('login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('callback')
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User;
    const tokenData = {
      name: user.name,
      email: user.email,
      photo: user.photo,
    };

    const tokenKey = '123456789';
    /*const tokenOptions = {
      subject: user.public_id,
      expiresIn: '2h',
    };*/
    const accessToken = sign({ ...tokenData, type: 'access' }, tokenKey, {
      subject: user.public_id,
      expiresIn: '15m',
    });

    const refreshToken = sign({ ...tokenData, type: 'refresh' }, tokenKey, {
      subject: user.public_id,
      expiresIn: '15m',
    });

    user.access_token = accessToken;
    user.refresh_token = refreshToken;

    console.log(await updateUserData(user));
    res.cookie('accessToken', accessToken);
    res.cookie('refreshToken', refreshToken);
    res.status(200).redirect('http://localhost:3000/');
    /*return res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });*/
  }
}
