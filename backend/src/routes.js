import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import EstablishmentController from './app/controllers/EstablishmentController';
import SessionController from './app/controllers/SessionController';
import ScheduleController from './app/controllers/ScheduleController';
import ServiceController from './app/controllers/ServicesController';
import GeolocationController from './app/controllers/GeolocationController';
import AppointmentController from './app/controllers/AppointmentController';
import ConfirmationController from './app/controllers/ConfirmationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => res.json({ ok: true }));

routes.post('/user', upload.single('avatar'), UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/user', UserController.show);
routes.put('/user', UserController.update);

routes.post('/schedule', ScheduleController.store);

routes.post('/appointment', AppointmentController.store);
routes.get('/appointment', AppointmentController.index);

routes.post('/confirmation/:appointmentId', ConfirmationController.store);

routes.post('/service', ServiceController.store);
routes.get('/service/:establishment', ServiceController.index);

routes.get('/geo', GeolocationController.index);

routes.post(
  '/establishment',
  upload.single('logo'),
  EstablishmentController.store
);

export default routes;
