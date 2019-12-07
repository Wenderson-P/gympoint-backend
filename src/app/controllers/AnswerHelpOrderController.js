import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';

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
    const helpOrderExists = await HelpOrder.findOne({
      where: { id },
    });

    if (!helpOrderExists) {
      return res.status(400).json({ error: 'Help Order does not exists' });
    }

    const helpOrder = await HelpOrder.update(
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
