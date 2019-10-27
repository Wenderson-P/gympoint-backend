import { Router } from 'express';
import Student from './app/models/Student';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello beatiful world' });
});

routes.get('/create', async (req, res) => {
  const student = await Student.create({
    name: 'Wenderson',
    email: 'wp@gmail.com',
    password_hash: '1223',
    age: '22',
    weight: '70.50',
    height: '1.80',
  });
  return res.json(student);
});

export default routes;
