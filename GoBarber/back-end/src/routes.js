import { Router } from 'express';

import UserController from './app/Controllers/UserController';
import SessionController from './app/Controllers/SessionControler';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
