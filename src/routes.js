import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import AvailableController from './app/controllers/AvailableController';
import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import ProviderController from './app/controllers/ProviderController';
import ScheduleController from './app/controllers/ScheduleController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Cadastro de usuários
routes.post('/users', UserController.store);
// Login
routes.post('/sessions', SessionController.store);

routes.get('/', (req, res) => res.send('ok'));

// Verifica se o usuário está logado, para todas as rotas abaixo
routes.use(authMiddleware);

// Atualização de usuário
routes.put('/users', UserController.update);
// Listagem de prestadores de serviço
routes.get('/providers', ProviderController.index);
// Listagem dos horários disponíveis de um prestador
routes.get('/providers/:providerId/available', AvailableController.index);
// Listagem de agendamentos do usuário
routes.get('/appointments', AppointmentController.index);
// Cadastro de agendamento
routes.post('/appointments', AppointmentController.store);
// Cancelar agendamento
routes.delete('/appointments/:id', AppointmentController.delete);
// Upload de arquivo
routes.post('/files', upload.single('file'), FileController.store);
// Listagem de agenda do prestador
routes.get('/schedule', ScheduleController.index);
// Listagem de notificações do usuário
routes.get('/notifications', NotificationController.index);
// Marcar notificação como lida
routes.put('/notifications/:id', NotificationController.update);

export default routes;
