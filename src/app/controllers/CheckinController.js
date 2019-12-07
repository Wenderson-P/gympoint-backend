import { isAfter, startOfWeek, isToday } from 'date-fns';
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

    const today = new Date();

    const startOfTheWeek = startOfWeek(today);

    const studentCheckins = await Checkin.findAll({
      where: { student_id: id },
    });

    let checkinsMade = 0;
    let checkinToday = false;

    studentCheckins.forEach(checkin => {
      if (isToday(checkin.createdAt)) {
        checkinToday = true;
      }
      if (isAfter(checkin.createdAt, startOfTheWeek)) {
        checkinsMade += 1;
      }
    });

    if (checkinsMade >= 5) {
      return res.status(400).json({
        error:
          'The student has already done all the allowed check-in of the week',
      });
    }

    if (checkinToday) {
      return res
        .status(400)
        .json({ error: 'The student has already made one checkin today' });
    }

    Checkin.create({ student_id: id });

    return res.json({
      sucess: 'Checkin made with success',
    });
  }
}

export default new CheckinController();
