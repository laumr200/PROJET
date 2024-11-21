
import express from 'express';
import { createAuditLog } from '../Controllers/auditlogController.js';
import auditLogValidationRules from '../Validations/auditlogValidation.js';

const route = express.Router();

route.post('/auditlog',auditLogValidationRules, createAuditLog);

export default route