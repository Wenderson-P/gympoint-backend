import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class AllHelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name'],
        },
      ],
      where: {
        answer_at: null,
      },
      attributes: ['id', 'student_id', 'question'],
    });
    return res.json(helpOrders);
  }
}

export default new AllHelpOrderController();
