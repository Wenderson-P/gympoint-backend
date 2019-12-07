import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string()
        .required()
        .max(360),
    });

    const { id } = req.params;
    const { question } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }
    const studentExists = await Student.findOne({
      where: { id },
    });

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const helpOrder = await HelpOrder.create({
      student_id: id,
      question,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
