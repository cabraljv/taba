import * as Yup from 'yup';
import { Op } from 'sequelize';
import Establishment from '../models/Establishment';
import User from '../models/User';
import File from '../models/File';
import Region from '../models/Region';

class EstablishmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      branch: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const user = await User.findByPk(req.userId);
    if (!user.provider) {
      return res.status(400).json({ error: 'User as not a provider' });
    }
    const { name, latitude, longitude, branch, description } = req.body;
    const region = await Region.findOne({
      min_latitude: {
        [Op.gt]: latitude,
      },
      max_latitude: {
        [Op.lt]: latitude,
      },
      min_longitude: {
        [Op.gt]: longitude,
      },
      max_longitude: {
        [Op.lt]: longitude,
      },
    });
    if (!region) {
      return res.status(400).json({ error: 'Region is not used' });
    }
    if (req.file) {
      const logo = await File.create({ path: req.file.filename });
      await Establishment.create({
        name,
        latitude,
        longitude,
        branch_id: branch,
        region_id: region.id,
        owner_id: req.userId,
        logo_id: logo.id,
      });
      return res.json({ response: `${name} created` });
    }
    await Establishment.create({
      name,
      latitude,
      longitude,
      branch_id: branch,
      region: region.id,
      owner_id: req.userId,
      description,
    });
    return res.json({ response: `${name} created` });
  }
}

export default new EstablishmentController();
