import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { q } = req.query;

    if (q) {
      const students = await Student.findAll({
        where: {
          name: {
            [Op.iLike]: q,
          },
        },
      });
      return res.json(students);
    }
    const students = await Student.findAll();
    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }
    const { id, name, email } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }
    const { email, id } = req.body;
    const student = await Student.findByPk(id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });
      if (studentExists) {
        return res.status(401).json({ error: 'Email already exists' });
      }
    }
    const { name } = await student.update(req.body);
    return res.json({
      name,
      id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const student = Student.findByPk(id);
    if (!student) {
      return res.status(400).json({ error: "Student doesn't exists" });
    }
    await Student.destroy({ where: { id } });

    return res.json({ id });
  }
}

export default new StudentController();
