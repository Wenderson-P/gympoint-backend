import { Router } from 'express';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello beatiful world' });
});

routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/students', StudentController.update);

export default routes;
