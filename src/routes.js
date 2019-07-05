import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Cadastro de usuários
routes.post('/users', UserController.store);
// Login
routes.post('/sessions', SessionController.store);

// Verifica se o usuário está logado, para todas as rotas abaixo
routes.use(authMiddleware);

// Atualização de usuário
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
