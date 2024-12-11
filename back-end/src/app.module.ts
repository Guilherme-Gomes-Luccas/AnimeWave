import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserController } from './controllers/user/createUser';
import { GoogleStrategy } from './controllers/auth/strategies/google.strategy';
import { LoginGoogleController } from './controllers/auth/loginGoogle';
import { LoginUser } from './controllers/auth/login';
import { SessionController } from './controllers/auth/session';
import { RefreshController } from './controllers/auth/refresh';
import { GetUserDataController } from './controllers/user/getUserData';
import { CreatePostController } from './controllers/posts/createPost';
import { GetPostsController } from './controllers/posts/getPosts';
import { EditPostController } from './controllers/posts/editPost';
import { DeletePostController } from './controllers/posts/deletePost';

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
    CreatePostController,
    GetPostsController,
    EditPostController,
    DeletePostController,
  ],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
