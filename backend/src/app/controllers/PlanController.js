import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      attributes: ['title', 'duration', 'price'],
    });
    return res.json(plans);
  }
}

export default new PlanController();
