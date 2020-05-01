import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }
    const { email, password, name } = req.body;
    if (req.file) {
      const { id } = await File.create({ path: req.file.filename });
      await User.create({
        email,
        password,
        name,
        pic_id: id,
      });
      return res.json({ response: 'User created' });
    }
    await User.create({
      email,
      password,
      name,
    });
    return res.json({ response: 'User created' });
  }
}

export default new UserController();
