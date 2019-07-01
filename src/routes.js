import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// Cadastro de usuários
routes.post('/users', UserController.store);
// Login
routes.post('/sessions', SessionController.store);

// Verifica se o usuário está logado, para todas as rotas abaixo
routes.use(authMiddleware);

// Atualização de usuário
routes.put('/users', authMiddleware, UserController.update);

export default routes;
