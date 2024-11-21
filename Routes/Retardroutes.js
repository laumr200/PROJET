import {Router} from 'express';
import { createRetard, getAllRetards, getRetardById, updateRetard, deleteRetard } from '../Controllers/retardcontrollers.js';
import retardValidationRules from '../Validations/retardValidation.js'

const route = Router();

// Definir as rotas para retards
route.post('/',retardValidationRules,  createRetard);        // Criar novo retard
route.get('/', getAllRetards);         // Listar todos os retards
route.get('/:id', getRetardById);      // Obter retard específico por ID
route.put('/:id',retardValidationRules, updateRetard);      // Atualizar retard por ID
route.delete('/:id', deleteRetard);    // Excluir retard por ID

export default route;