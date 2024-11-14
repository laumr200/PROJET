import {Router} from 'express';
import { createConge, getAllConges, getCongeById, updateConge, deleteConge } from '../Controllers/congecontroller.js';

const route = Router();

// Rota para criar uma nova ausência
route.post('/', createConge);

// Rota para obter todas as ausências
route.get('/', getAllConges);

// Rota para obter uma ausência específica por ID
route.get('/:id', getCongeById);

// Rota para atualizar uma ausência por ID
route.put('/:id', updateConge);

// Rota para excluir uma ausência por ID
route.delete('/:id', deleteConge);

export default route;