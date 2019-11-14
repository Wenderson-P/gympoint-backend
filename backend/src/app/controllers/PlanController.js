import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      attributes: ['title', 'duration', 'price'],
    });
    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exist' });
    }
    const { title, duration, price } = await Plan.create(req.body);

    return res.json({
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }
    const { id, title } = req.body;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(400).json("This plan doesn't exists");
    }
    if (plan.title !== title) {
      const planExists = await Plan.findOne({ where: { title } });
      if (planExists) {
        return res.status(400).json('This title is already taken');
      }
    }
    const { duration, price } = await Plan.update(req.body, {
      where: { id },
    });

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const plan = Plan.findByPk(id, {});
    if (!plan) {
      return res.status(400).json({ error: "Plan doesn't exists" });
    }

    await Plan.destroy({ where: { id } });

    return res.json({ id });
  }
}

export default new PlanController();
