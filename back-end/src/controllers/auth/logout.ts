import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { updateUserData } from 'src/models/userModel';

@Controller('/logout')
export class LogoutController {
  @Post()
  async logout(@Req() req: Request, @Res() res: Response) {
    const {refreshToken} = req.body;

    try {
      const user = verify(refreshToken, process.env.TOKEN_KEY);
      user.refreshToken = '';

      await updateUserData (user);

      return res.status(201).json({message: "Sessão finalizada!"})
      
    } catch (error) {
      console.log(error)
      res.status(400).json({error: error})
    }
  }
}
