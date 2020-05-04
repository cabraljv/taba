import * as Yup from 'yup';
import { format } from 'date-fns';
import Schedule from '../models/Schedule';

class AvailibleDaysController {
  async index(req, res) {
    const schema = Yup.object().shape({
      establishmentId: Yup.number(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Invalid fields' });

    const { establishmentId } = req.params;

    const schedules = await Schedule.findAll({
      where: {
        establishment_id: establishmentId,
      },
    });

    const availible = schedules.map((item) => {
      return `${format(item.start_date, 'yyyy-MM-dd')}`;
    });

    return res.json(availible);
  }
}

export default new AvailibleDaysController();
