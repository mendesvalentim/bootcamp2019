import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // pega uma função de callbak e transforma em async await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  // const token = authHeader.split(' '); // divide em dois a partir do spaço [0]Bearer [1]token
  const [, token] = authHeader.split(' '); // desestrutura para utilizar somento o token

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
