
import express from 'express';
import { createAuditLog } from '../Controllers/auditlogController.js';


const route = express.Router();

route.post('/auditlog', createAuditLog);

export default route