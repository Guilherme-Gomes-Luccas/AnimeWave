import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { validateUserToCreate } from 'src/models/schemas/userSchema';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { createUser } from 'src/models/userModel';

@Controller('novo-usuario')
export class CreateUserController {
  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    try {
      const { name, email, password } = req.body;

      const public_id = uuid();
      const validatedUser = validateUserToCreate({
        name,
        email,
        password,
        public_id,
      });

      const errors = validatedUser.error?.issues;

      if (!validatedUser.success) {
        res.status(400).json({ error: errors });
      }

      validatedUser.data.password = bcrypt.hashSync(
        validatedUser.data.password,
        10,
      );

      const user = await createUser({
        name: validatedUser.data.name,
        email: validatedUser.data.email,
        password: validatedUser.data.password,
        public_id: validatedUser.data.public_id,
      });

      res.status(201).json({
        success: 'Usuário criado com sucesso',
        user: user,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(400).json({
          error: [{ message: 'Email já cadastrado', path: ['email'] }],
        });
      }
    }
  }
}
