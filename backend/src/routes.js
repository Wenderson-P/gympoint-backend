import { Router } from 'express';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello beatiful world' });
});

routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

export default routes;
