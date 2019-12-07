import HelpOrder from '../models/HelpOrder';

class AllHelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer_at: null,
      },
      attributes: ['student_id', 'question'],
    });
    return res.json(helpOrders);
  }
}

export default new AllHelpOrderController();
