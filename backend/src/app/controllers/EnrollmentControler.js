import { addMonths, parseISO, format, isBefore, startOfDay } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import { Op } from 'sequelize';
import { resolve } from 'path';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Mail from '../../lib/Mail';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll({
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name'],
        },
      ],
    });
    return res.json(enrollments);
  }

  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const enrollmentExists = await Enrollment.findOne({
      where: {
        student_id,
        end_date: {
          [Op.gte]: [start_date],
        },
      },
    });
    if (enrollmentExists) {
      return res.status(400).json({ error: 'Enrollment already exists' });
    }
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    if (isBefore(parseISO(start_date), startOfDay(new Date()))) {
      return res.status(400).json({ error: 'Past dates are not allowed' });
    }
    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: "Student doesn't exist" });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: "Plan doesn't exist" });
    }

    const end_date = format(
      addMonths(parseISO(start_date), plan.duration),
      "yyyy-MM-dd'T'HH:mm:ssxxx"
    );

    const price = plan.duration * plan.price;

    const formattedEndDate = format(
      parseISO(end_date),
      "dd 'de' MMMM' de' yyyy",
      {
        locale: pt,
      }
    );

    const folder = resolve(__dirname, '..', 'views', 'emails', 'images');

    await Mail.sendMail({
      to: `${student.name} <${student.email}> `,
      subject: 'Bem vindo ao gympoint!',
      template: 'enrollment',
      context: {
        student: student.name,
        plan: plan.title,
        price: plan.price,
        duration: plan.duration,
        endDate: formattedEndDate,
      },
      attachments: [
        {
          filename: 'logo.svg',
          path: `${folder}/logo.svg`,
          cid: 'logo',
        },
      ],
    });

    await Enrollment.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });
    return res.json({ student, plan, end_date, price });
  }

  async update(req, res) {
    const { student_id, plan_id } = req.body;
    const today = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");
    const enrollment = await Enrollment.findOne({
      where: {
        student_id,
        plan_id,
        end_date: {
          [Op.gte]: [today],
        },
      },
    });
    if (!enrollment) {
      return res.status(400).json({ error: "Enrollment doesn't exists" });
    }

    return res.json({
      enrollment,
    });
  }
}

export default new EnrollmentController();
