import { sign } from 'jsonwebtoken';
import { User } from 'src/models/userInterface';

export const generateAccessToken = (user: User) => {
  const tokenData = {
    name: user.name,
    email: user.email,
    photo: user.photo,
  };

  const accessToken = sign(
    { ...tokenData, type: 'access' },
    process.env.TOKEN_KEY,
    {
      subject: user.public_id,
      expiresIn: '60s',
    },
  );

  return accessToken;
};
