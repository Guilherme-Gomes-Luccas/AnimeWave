import { Controller, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { remove } from 'src/models/postModel';

@Controller('delete-post')
export class DeletePostController {
  @Delete(':id')
  async deletePost(@Req() req: Request, @Res() res: Response) {
    const id = req.params.id;

    try {
      const result = await remove(id);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  }
}
