import express from 'express';
import { getRapports , createRapport } from '../Controllers/rapportcontroller.js';
import rapportValidationRules from '../Validations/rapportValidation.js'

const route= express.Router();

route.get('/', getRapports);
route.post('/',rapportValidationRules
,    createRapport);

export default route;