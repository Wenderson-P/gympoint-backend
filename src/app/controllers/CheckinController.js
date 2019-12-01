import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const checkins = await Checkin.findAll({
      where: {
        id,
      },
    });
    return res.json({
      checkins,
    });
  }
}

export default new CheckinController();
