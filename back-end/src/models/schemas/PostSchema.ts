import { z } from 'zod';
import { Post } from '../postInterface';

const userSchema = z.object({
  public_id: z.string({
    required_error: 'O ID público é obrigatório',
    invalid_type_error: 'O ID público deve ser uma string',
  }),
  user_id: z.string({
    required_error: 'O ID público é obrigatório',
    invalid_type_error: 'O ID público deve ser uma string',
  }),
  title: z
    .string({
      required_error: 'O título é obrigatório',
      invalid_type_error: 'O título deve ser uma string',
    })
    .min(3, { message: 'O título deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O título deve ter no maxímo 100 caracteres' }),

    content: z
    .string({
      required_error: 'O conteúdo é obrigatório',
      invalid_type_error: 'O conteúdo deve ser uma string',
    })
    .email({ message: 'O conteúdo deve ser válido' })
    .max(500, { message: 'O conteúdo deve ter no máximo 500 caracteres' }),

  photo: z
    .string({
      invalid_type_error: 'A foto deve ser uma string',
    })
});

export const validatePost = (post: Post) => {
  return userSchema.safeParse(post);
};

export const validatePostToCreate = (post: Post) => {
  const partialUserSchema = userSchema.partial({
    public_id: true
  });
  return partialUserSchema.safeParse(post);
};
