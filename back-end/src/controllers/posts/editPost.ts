import { Controller, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { update } from 'src/models/postModel';

@Controller('edit-post')
export class EditPostController {
  @Put(':id')
  async editPost(@Req() req: Request, @Res() res: Response) {
    const id = req.params.id;
    const content = req.body.content;

    try {
      const result = await update(content, id);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  }
}
