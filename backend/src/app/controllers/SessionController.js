import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      where: { email },
    });
    if (!admin) {
      return res.status('401').json({ error: 'admin not found' });
    }

    if (!(await admin.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = admin;
    return res.json({
      admin: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '6840957b8d818e8f91f51011d550cc1a', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
