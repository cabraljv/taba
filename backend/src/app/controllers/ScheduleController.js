import * as Yup from 'yup';
import { Op } from 'sequelize';
import Schedule from '../models/Schedule';
import Establishment from '../models/Establishment';

class ScheduleController {
  async store(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
      end_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid fields' });

    const { start_date, end_date } = req.body;

    const establishment = await Establishment.findOne({
      where: {
        owner_id: req.userId,
      },
    });

    /*
        end_date: {
          [Op.or]: [{ [Op.gt]: start_date }, { [Op.gt]: end_date }],
        },
        start_date: {
          [Op.or]: [{ [Op.lt]: start_date }, { [Op.lt]: end_date }],
        },
    */
    if (!establishment) {
      return res.status(404).json({ error: 'Establishment not founded' });
    }

    const schedule_check = await Schedule.findOne({
      where: {
        establishment_id: establishment.id,
        end_date: {
          [Op.or]: [{ [Op.gte]: start_date }, { [Op.gte]: end_date }],
        },
        start_date: {
          [Op.or]: [{ [Op.lte]: start_date }, { [Op.lte]: end_date }],
        },
      },
    });

    if (schedule_check) {
      return res.status(400).json({ error: 'Schedule already exists' });
    }

    await Schedule.create({
      establishment_id: establishment.id,
      start_date,
      end_date,
    });

    return res.json({ response: 'Schedule successful created' });
  }
}

export default new ScheduleController();
