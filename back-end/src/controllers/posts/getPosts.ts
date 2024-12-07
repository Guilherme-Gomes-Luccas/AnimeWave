import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Post } from "src/models/postInterface";
import { getAll } from "src/models/postModel";

@Controller('posts')
export class GetPostsController {
    @Get()
    async getPosts(@Req() req: Request, @Res() res: Response) {
        try {
            const postsData  = await getAll()

            const posts: Post[] = postsData.map(post => ({
                public_id: post.public_id,
                id_user: post.id_user,
                title: post.title,
                content: post.content,
                photo: post.photo,
            }));


            res.status(200).json(posts);
        } catch (error) {
            if (error.code === 'P2002') {
                res.status(400).json({
                    error: [{ message: 'Erro P2002' }],
                });
            } else {
                res.status(400).json({error: error})
            }
        }
    }
}