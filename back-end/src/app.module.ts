import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserController } from './controllers/user/createUser';

@Module({
  imports: [],
  controllers: [AppController, CreateUserController],
  providers: [AppService],
})
export class AppModule {}
