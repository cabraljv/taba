import * as Yup from 'yup';

import AppointmentOrder from '../models/AppointmentOrder';
import Establishment from '../models/Establishment';

class ConfirmationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid fields' });

    const establishment = await Establishment.findOne({
      where: {
        owner_id: req.userId,
      },
    });
    const { appointmentId } = req.params;
    if (!establishment)
      return res.status(404).json({ error: 'Establishment not founded' });

    const order = await AppointmentOrder.findOne({
      where: {
        id: appointmentId,
        establishment_id: establishment.id,
      },
    });

    if (!order)
      return res.status(404).json({ error: 'Appointment order not founded' });

    order.confirmed = true;

    order.save();

    return res.json({ response: 'Appointment order successful confirmed' });
  }
}

export default new ConfirmationController();
