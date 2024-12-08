import { z } from 'zod';
import { User } from '../userInterface';

const userSchema = z.object({
  id: z
    .number({
      required_error: 'O ID é obrigatória',
      invalid_type_error: 'O ID deve ser um número inteiro',
    })
    .positive({ message: 'O ID deve ser um número inteiro positivo' }),

  public_id: z.string({
    required_error: 'O ID público é obrigatório',
    invalid_type_error: 'O ID público deve ser uma string',
  }),
  name: z
    .string({
      required_error: 'O nome é obrigatório',
      invalid_type_error: 'O nome deve ser uma string',
    })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O nome deve ter no maxímo 100 caracteres' }),

  email: z
    .string({
      required_error: 'O email é obrigatório',
      invalid_type_error: 'O email deve ser uma string',
    })
    .email({ message: 'O email deve ser válido' })
    .max(200, { message: 'O email deve ter no máximo 200 caracteres' }),

  password: z
    .string({
      required_error: 'A senha é obrigatória',
      invalid_type_error: 'A senha deve ser uma string',
    })
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .max(256, { message: 'A senha deve ter no maximo 256 caracteres' }),
});

export const validateUser = (user: User) => {
  return userSchema.safeParse(user);
};

export const validateUserToCreate = (user: User) => {
  const partialUserSchema = userSchema.partial({
    id: true,
    public_id: true,
  });
  return partialUserSchema.safeParse(user);
};

export const validateUserToLogin = (user: User) => {
  const partialUserSchema = userSchema.partial({
    id: true,
    public_id: true,
    name: true,
  });
  return partialUserSchema.safeParse(user);
};
