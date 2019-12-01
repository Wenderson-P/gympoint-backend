import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const checkins = await Checkin.findAll({
      where: { student_id: id },
    });
    return res.json({
      checkins,
    });
  }

  async store(req, res) {
    const { id } = req.params;

    const studentExists = await Student.findOne({
      where: { id },
      attributes: ['id', 'name'],
    });

    if (!studentExists) {
      return res.status(400).json({ error: "Student don't exists" });
    }

    return res.json({
      studentExists,
    });
  }
}

export default new CheckinController();
