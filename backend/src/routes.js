import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import EstablishmentController from './app/controllers/EstablishmentController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => res.json({ ok: true }));
routes.post('/user', upload.single('avatar'), UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post(
  '/establishment',
  upload.single('logo'),
  EstablishmentController.store
);

export default routes;
