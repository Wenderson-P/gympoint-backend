import { Router } from 'express';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello beatiful world' });
});

routes.post('/students', StudentController.store);

export default routes;
