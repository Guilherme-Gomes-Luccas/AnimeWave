import { sign } from 'jsonwebtoken';
import { User } from 'src/models/userInterface';

export const generateRefreshToken = (user: User) => {
  const tokenData = {
    name: user.name,
    email: user.email,
    photo: user.photo,
  };

  const refreshToken = sign(
    { ...tokenData, type: 'refresh' },
    process.env.TOKEN_KEY,
    {
      subject: user.public_id,
      expiresIn: '1d',
    },
  );

  return refreshToken;
};
