import * as Yup from 'yup';

import { Op } from 'sequelize';
import BuyOrder from '../models/BuyOrder';
import Service from '../models/Service';
import Establishment from '../models/Establishment';

class BuyOrderController {
  async index(req, res) {
    const orders = await BuyOrder.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      attributes: ['id', 'confirmed'],
      include: [
        {
          model: Service,
          attributes: ['title', 'id'],
          as: 'services',
          through: {
            attributes: [],
          },
        },
      ],
    });

    return res.json(orders);
  }

  async show(req, res) {
    const order = await BuyOrder.findByPk(req.params.orderId, {
      attributes: ['id', 'confirmed'],
      include: [
        {
          model: Service,
          attributes: ['title', 'id'],
          as: 'services',
          through: {
            attributes: [],
          },
        },
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      services: Yup.array().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }
    const { services } = req.body;

    // Verificar se os serviços tem o mesmo establishment_id
    // Verificar se o userId não é o mesmo do owner do establishment
    const service_check = await Service.findByPk(services[0], {
      include: [
        {
          model: Establishment,
          attributes: ['id'],
          as: 'establishment',
        },
      ],
    });

    const establishment_id = service_check.establishment.id;
    const items = await Service.findAll({
      where: {
        id: {
          [Op.in]: services,
        },
      },
    });
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].establishment_id !== establishment_id) {
        return res.status(400).json({ error: 'Not the same establishment' });
      }
    }
    const establishment = await Establishment.findByPk(establishment_id);

    if (establishment.owner_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'This user is the owner of this establishment' });
    }

    const order = await BuyOrder.create({
      user_id: req.userId,
    });
    order.setServices(services);

    order.save();
    return res.json(order);
  }
}

export default new BuyOrderController();
