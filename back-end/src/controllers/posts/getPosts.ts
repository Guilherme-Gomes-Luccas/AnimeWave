import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Posts } from 'src/models/postInterface';
import { getAll, getPostByUserId } from 'src/models/postModel';
import { getById } from 'src/models/userModel';
import { getById as getPostById } from 'src/models/postModel';
import { getPostsByHashtag } from 'src/models/postModel';
import { verify } from 'jsonwebtoken';

@Controller('get-posts')
export class GetPostsController {
  async postsArray(postsData: Posts[]) {
    const posts: Posts[] = postsData.map((post: Posts) => ({
      public_id: post.public_id,
      id_user: post.id_user,
      hashtags: post.hashtags,
      content: post.content,
      photo: post.photo,
      date: post.date,
    }));

    for (let i = 0; i < posts.length; i++) {
      posts[i].user_photo = (await getById(posts[i].id_user)).photo;
      posts[i].username = (await getById(posts[i].id_user)).name;
    }

    return posts;
  }

  @Get()
  async getPosts(@Req() req: Request, @Res() res: Response) {
    try {
      const postsData = await getAll();
      const posts: Posts[] = await this.postsArray(postsData);

      res.status(200).json(posts);
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(400).json({
          error: [{ message: 'Erro P2002' }],
        });
      } else {
        res.status(400).json({ error: error });
      }
    }
  }

  @Post('search/:query')
  async getPostsByHashtag(@Req() req: Request, @Res() res: Response) {
    const query = req.params.query;

    try {
      const postsData = await getPostsByHashtag(query);
      const posts = await this.postsArray(postsData);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  @Post(':id')
  async getPostsById(@Req() req: Request, @Res() res: Response) {
    const id = req.params.id;

    try {
      const post: Posts = await getPostById(id);

      post.user_photo = (await getById(post.id_user)).photo;
      post.username = (await getById(post.id_user)).name;
      post.date = new Date(post.date).toLocaleString('pt-BR');

      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: error });
    }
  }

  @Get('my-posts')
  async getMyPosts(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization.split(' ')[1];

    try {
      const userData = verify(token, process.env.TOKEN_KEY);

      if (!userData) {
        return res.status(401).json({
          error: ' Não autorizado! Token inválido',
        });
      }

      const myPostsData = await getPostByUserId(<string>userData.sub);
      const myPosts: Posts[] = await this.postsArray(myPostsData);

      res.status(200).json(myPosts);
    } catch (error) {
      console.log('erroo: ', error);
      return res.status(400).json({ error: error });
    }
  }
}
