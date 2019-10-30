import { Router } from 'express';

import UserController from './app/Controllers/UserController';
import SessionController from './app/Controllers/SessionControler';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
