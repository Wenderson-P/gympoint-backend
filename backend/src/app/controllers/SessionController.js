import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status('401').json({ error: 'admin not found' });
    }
  }
}

export default SessionController;
