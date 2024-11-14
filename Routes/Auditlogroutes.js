// routes/auditlog.js
import {Router} from 'express';
import { createAuditLog } from '../Controllers/auditlogcontroller.js';

const route = Router();

// POST route to create an audit log entry
route.post('/create', createAuditLog);

export default route;


