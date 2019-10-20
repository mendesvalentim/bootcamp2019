import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'O Pedro e Nicolly!!!' });
});

export default routes;
