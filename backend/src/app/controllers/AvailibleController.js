import * as Yup from 'yup';

import { isBefore, addMinutes, isAfter, isEqual } from 'date-fns';
import Schedule from '../models/Schedule';
import AppointmentOrder from '../models/AppointmentOrder';
import Service from '../models/Service';

class AvailibleController {
  async index(req, res) {
    const schema = Yup.object().shape({
      service: Yup.number().required(),
      schedule_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query)))
      return res.status(400).json({ error: 'Invalid fields' });

    const { schedule_id, service: service_id } = req.query;

    const appointments = await AppointmentOrder.findAll({
      where: {
        schedule_id,
        canceled_at: null,
      },
      order: ['start_date'],
      attributes: ['id', 'start_date', 'end_date'],
    });
    const schedule = await Schedule.findByPk(schedule_id);

    const service = await Service.findByPk(service_id);

    const horarios = [];

    let current_date = schedule.start_date;
    // console.log(addMinutes(current_date, service.minutes));
    while (true) {
      console.log(current_date);
      const a = appointments.find(
        // eslint-disable-next-line no-loop-func
        (item) => {
          const sd = current_date;
          const ed = addMinutes(current_date, 30);

          if (
            (isAfter(sd, item.start_date) && isBefore(sd, item.end_date)) ||
            (isBefore(item.end_date, ed) && isAfter(item.start_date, ed)) ||
            isEqual(item.start_date, sd)
          )
            return true;
        }
      );
      if (!a) {
        horarios.push(current_date);
      }

      current_date = addMinutes(current_date, 30);

      if (isAfter(current_date, schedule.end_date)) break;
    }

    return res.json(horarios);
  }
}

// 09:30 - 10:30 (existe)

// 10:00 - 11:00 (para adicionar)
// 2sd>1sd and 2sd<1ed

// 09:00 - 10:00 (para adicionar)
// 2ed>1sd and 2ed<1ed

export default new AvailibleController();
