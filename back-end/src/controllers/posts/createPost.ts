import { Controller, Post, Req, Res } from '@nestjs/common';
import { validatePostToCreate } from 'src/models/schemas/PostSchema';
import { Request, Response } from 'express';
import { createPost } from 'src/models/postModel';

@Controller('novo-post')
export class CreatePostController {
  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    try {
      const { user, hashtags, content, photo } = req.body;

      const validatedPost = validatePostToCreate({
        id_user: user.user.sub,
        hashtags,
        content,
        photo,
      });

      console.log(validatedPost.error);

      const errors = validatedPost.error?.issues;

      if (!validatedPost.success) {
        res.status(400).json({ error: errors });
      }

      for (let i = 0; i < validatedPost.data.hashtags.length; i++) {
        if (!validatedPost.data.hashtags[i].startsWith('#')) {
          validatedPost.data.hashtags[i] = `#${validatedPost.data.hashtags[i]}`;
        }
      }

      const post = await createPost({
        id_user: validatedPost.data.id_user,
        hashtags: validatedPost.data.hashtags,
        content: validatedPost.data.content,
        photo: validatedPost.data.photo,
      });

      res.status(201).json({
        success: 'Post criado com sucesso',
        post: post,
      });
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
}
