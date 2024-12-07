import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { CreateUserController } from './controllers/user/createUser';
import { GoogleStrategy } from './controllers/auth/strategies/google.strategy';
import { LoginGoogleController } from './controllers/auth/loginGoogle';
import { LoginUser } from './controllers/auth/login';
import { SessionController } from './controllers/auth/session';
import { RefreshController } from './controllers/auth/refresh';
import { GetUserDataController } from './controllers/user/getUserData';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateUserController,
    LoginGoogleController,
    LoginUser,
    SessionController,
    RefreshController,
    GetUserDataController,
  ],
  providers: [AppService, GoogleStrategy],
=======
import { CreatePostController } from './controllers/posts/createPost';
import { GetPostsController } from './controllers/posts/getPosts';

@Module({
  imports: [],
  controllers: [AppController, CreatePostController, GetPostsController],
  providers: [AppService],
>>>>>>> posts
})
export class AppModule {}
