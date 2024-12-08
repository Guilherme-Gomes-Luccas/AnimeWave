import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Posts } from 'src/models/postInterface';
import { getAll } from 'src/models/postModel';
import { getById } from 'src/models/userModel';
import { getPostsByHashtag } from 'src/models/postModel';

@Controller('get-posts')
export class GetPostsController {
  async postsArray(postsData: Posts[]) {
    const posts: Posts[] = postsData.map((post: Posts) => ({
      public_id: post.public_id,
      id_user: post.id_user,
      hashtags: post.hashtags,
      content: post.content,
      photo: post.photo,
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
    let query = req.params.query;

    if (!query.includes('#')) {
      query = `#${query}`;
    }

    try {
      const postsData = await getPostsByHashtag(query);
      const posts = await this.postsArray(postsData);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
