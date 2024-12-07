import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatePostController } from './controllers/posts/createPost';
import { GetPostsController } from './controllers/posts/getPosts';

@Module({
  imports: [],
  controllers: [AppController, CreatePostController, GetPostsController],
  providers: [AppService],
})
export class AppModule {}
