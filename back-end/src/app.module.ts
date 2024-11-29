import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserController } from './controllers/user/createUser';
import { GoogleStrategy } from './controllers/auth/strategies/google.strategy';
import { LoginGoogleController } from './controllers/auth/loginGoogle';
import { LoginUser } from './controllers/auth/login';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateUserController,
    LoginGoogleController,
    LoginUser
  ],
  providers: [AppService, GoogleStrategy]
})
export class AppModule {}