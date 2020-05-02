import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';

class UserController {
  async show(req, res) {
    const user = await User.findByPk(req.userId, {
      attributes: ['name', 'email', 'points', 'provider'],
      include: [
        {
          model: File,
          attributes: ['path', 'url'],
          as: 'avatar',
        },
      ],
    });
    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      provider: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }
    const { email, password, name, provider } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ error: 'Email in use' });
    }

    if (req.file) {
      const { id } = await File.create({ path: req.file.filename });
      await User.create({
        email,
        password,
        name,
        pic_id: id,
        provider,
      });
      return res.json({ response: 'User created' });
    }
    await User.create({
      email,
      password,
      name,
      provider,
    });
    return res.json({ response: 'User created' });
  }
}

export default new UserController();
