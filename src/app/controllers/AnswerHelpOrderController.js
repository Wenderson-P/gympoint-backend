import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import Queue from '../../lib/Queue';
import QuestionAnsweredEmail from '../jobs/QuestionAnsweredEmail';

class AnswerHelpOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string()
        .required()
        .max(360),
    });

    const { id } = req.params;
    const { answer } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }
    const helpOrder = await HelpOrder.findOne({
      where: { id },
    });

    if (!helpOrder) {
      return res.status(400).json({ error: 'Help Order does not exists' });
    }

    const student = await Student.findOne({
      where: { id: helpOrder.student_id },
    });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }
    await Queue.add(QuestionAnsweredEmail.key, { student, helpOrder, answer });

    await HelpOrder.update(
      {
        answer,
        answer_at: new Date(),
      },
      {
        where: {
          id,
        },
      }
    );

    return res.json('Question answered with sucess');
  }
}

export default new AnswerHelpOrderController();
