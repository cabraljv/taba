import * as Yup from 'yup';

import { Op } from 'sequelize';
import { addMinutes, parseISO } from 'date-fns';

import Service from '../models/Service';
import Schedule from '../models/Schedule';
import AppointmentOrder from '../models/AppointmentOrder';
import Establishment from '../models/Establishment';
import User from '../models/User';

class AppointmentController {
  async index(req, res) {
    const establishment = await Establishment.findOne({
      where: {
        owner_id: req.userId,
      },
    });

    if (establishment) {
      const appointments = await AppointmentOrder.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['name', 'email'],
          },
          {
            model: Service,
            as: 'service',
            attributes: ['title'],
          },
        ],
        where: {
          canceled_at: null,
          confirmed: false,
          '$service.establishment_id$': establishment.id,
        },
        attributes: ['start_date'],
      });

      return res.json(appointments);
    }

    const appointments = await AppointmentOrder.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['start_date'],
      include: [
        {
          model: Service,
          as: 'service',
          attributes: ['title'],
        },
      ],
    });
    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      service_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid fields' });

    const { service_id, start_date } = req.body;

    const service = await Service.findByPk(service_id);

    if (!service) return res.status(404).json({ error: 'Service not found' });

    const parsedDate = parseISO(start_date);

    const end_date = addMinutes(parsedDate, service.minutes);

    const schedule = await Schedule.findOne({
      where: {
        establishment_id: service.establishment_id,
        canceled_at: null,
        start_date: {
          [Op.lte]: start_date,
        },
        end_date: {
          [Op.gte]: end_date,
        },
      },
    });

    if (!schedule)
      return res.status(404).json({ error: 'Schedule not avalible' });

    const appointments = await AppointmentOrder.findAll({
      where: {
        schedule_id: schedule.id,
        canceled_at: null,
        confirmed: false,
        [Op.or]: [
          {
            start_date: {
              [Op.lt]: start_date,
            },
            end_date: {
              [Op.gt]: start_date,
            },
          },
          {
            start_date: {
              [Op.lt]: end_date,
            },
            end_date: {
              [Op.gt]: start_date,
            },
          },
        ],
      },
    });

    if (appointments.length > 0)
      return res.status(400).json('Schedule not avalible');

    await AppointmentOrder.create({
      start_date,
      end_date,
      service_id,
      schedule_id: schedule.id,
      user_id: req.userId,
    });
    return res.json({ response: 'Appointment order successful created' });
  }
}

export default new AppointmentController();
