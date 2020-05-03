import * as Yup from 'yup';
import Service from '../models/Service';
import User from '../models/User';
import Establishment from '../models/Establishment';
import Offer from '../models/Offer';
import Category from '../models/Category';

class ServiceController {
  async index(req, res) {
    const schema = Yup.object().shape({
      establishment: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const { establishment: establishment_id } = req.params;

    const services = await Service.findAll({
      where: {
        establishment_id,
      },
      include: [
        {
          model: Offer,
          as: 'offer',
          attributes: ['discount'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
      attributes: ['title', 'description', 'value', 'minutes'],
    });

    return res.json(services);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required(),
      category: Yup.number().required(),
      minutes: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }
    const user = await User.findByPk(req.userId);
    if (!user.provider) {
      return res.status(400).json({ error: 'User as not a provider' });
    }
    const { description, title, value, category, minutes } = req.body;
    const establishment_check = await Establishment.findOne({
      where: {
        owner_id: req.userId,
      },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['name', 'id'],
        },
      ],
    });

    if (!establishment_check) {
      return res.status(404).json({ error: 'Establishment not found' });
    }
    await Service.create({
      title,
      description,
      value,
      category_id: category,
      establishment_id: establishment_check.id,
      minutes,
    });
    return res.json({ response: 'Service successfully created' });
  }
}

export default new ServiceController();
