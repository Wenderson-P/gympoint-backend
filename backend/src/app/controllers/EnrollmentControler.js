import { addMonths, parseISO, format } from 'date-fns';
import * as Yup from 'yup';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';

class EnrollmentController {
  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
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
    await Enrollment.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });
    return res.json({ student, plan, end_date, price });
  }
}

export default new EnrollmentController();
