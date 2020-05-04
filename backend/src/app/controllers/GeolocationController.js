import * as Yup from 'yup';
import Sequelize from 'sequelize';
import Establishment from '../models/Establishment';
import File from '../models/File';

class GeolocationController {
  async index(req, res) {
    const shape = Yup.object().shape({
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    if (!(await shape.isValid(req.query))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const { latitude, longitude } = req.query;

    const maxBound = 5;

    const establishments = await Establishment.findAll({
      attributes: ['id', 'name', 'latitude', 'longitude'],
      where: Sequelize.literal(
        `(3959 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(${longitude}) - radians(longitude)) + sin(radians(${latitude})) * sin(radians(latitude))))<${maxBound}`
      ),

      include: [
        {
          model: File,
          as: 'logo',
          attributes: ['url', 'path'],
        },
      ],
    });

    return res.json(establishments);
  }
}

export default new GeolocationController();
