import express from 'express';
import { getRapports , createRapport } from '../Controllers/rapportcontroller.js';

const route= express.Router();

route.get('/rapports', getRapports);
route.post('/',rapportValidationRules
,    createRapport);

export default route;