import { z } from 'zod';
import { User } from './userInterface';
import { UserLogin } from './loginInterface';

export const userSchema = z.object({
  name: z
  .string({
    required_error: 'Você deve digitar um nome',
  })
  .min(1, { message: 'O nome é obrigatório' }),

  email: z
  .string({
    required_error: 'Você deve digitar um email',
  })
  .email({ message: 'O email deve ser válido' })
  .max(200, { message: 'O email deve ter no máximo 200 caracteres' }),

  password: z
  .string({
    required_error: 'Você deve digitar uma senha',
  })
  .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  .max(256, { message: 'A senha deve ter no maximo 256 caracteres' }),

  confirmPassword: z
  .string({
    required_error: 'Digite sua senha novamente',
  }),
});

export const validateUserToCreate = (user: User) => {
  return userSchema.safeParse(user);
};

export const validateUserToLogin = (user: UserLogin) => {
  const partialUserSchema = userSchema.partial({
    name: true,
    confirmPassword: true
  });
  return partialUserSchema.safeParse(user);
};