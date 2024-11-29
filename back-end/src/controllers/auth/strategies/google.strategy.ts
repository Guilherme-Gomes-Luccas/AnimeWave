import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { createUser, getUserByEmail } from 'src/models/userModel';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    let user = await getUserByEmail(profile.emails[0].value);

    console.log();
    if (!user) {
      user = await createUser({
        name: profile.displayName,
        email: profile.emails[0].value,
        password: '',
        public_id: uuid(),
        photo: profile.photos[0].value,
      });
    }

    done(null, user);
  }
}
