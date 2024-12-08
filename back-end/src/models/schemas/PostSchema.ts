import { z } from 'zod';
import { Posts } from '../postInterface';

const userSchema = z.object({
  public_id: z.string({
    required_error: 'O ID público é obrigatório',
    invalid_type_error: 'O ID público deve ser uma string',
  }),
  id_user: z.string({
    required_error: 'O ID público é obrigatório',
    invalid_type_error: 'O ID público deve ser uma string',
  }),
  hashtags: z.array(z.string()).optional(),
  content: z
    .string({
      required_error: 'O conteúdo é obrigatório',
      invalid_type_error: 'O conteúdo deve ser uma string',
    })
    .max(500, { message: 'O conteúdo deve ter no máximo 500 caracteres' }),

  photo: z.string({
    invalid_type_error: 'A foto deve ser uma string',
  }),
});

export const validatePost = (post: Posts) => {
  return userSchema.safeParse(post);
};

export const validatePostToCreate = (post: Posts) => {
  const partialUserSchema = userSchema.partial({
    public_id: true,
  });
  return partialUserSchema.safeParse(post);
};
