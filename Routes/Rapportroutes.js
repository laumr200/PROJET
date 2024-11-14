import express from 'express';
import { getRapports } from '../Controllers/rapportcontroller.js';
const route= express.Router();

route.get('/rapports', getRapports);

export default route;