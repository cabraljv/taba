import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './controllers/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => res.json({ ok: true }));
routes.post('/user', upload.single('avatar'), UserController.store);

export default routes;
