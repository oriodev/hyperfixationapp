import jwt from 'jsonwebtoken';

export const generateToken = async (userId: string) => {
  const SECRET_KEY = 'CHANGETHISLATERANDMOVETOENV'; // TODO: MOVE TO ENV
  const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

export const decodeToken = (session: string): string | null => {
  const response = jwt.decode(session);
  if (!response || typeof response === 'string') return null;

  return response.id;
}