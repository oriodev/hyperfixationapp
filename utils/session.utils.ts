import jwt from 'jsonwebtoken';

export const generateToken = async (userId: string) => {
  const SECRET_KEY = 'CHANGETHISLATERANDMOVETOENV'; // MOVE TO ENV
  const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });

  return token;
};
