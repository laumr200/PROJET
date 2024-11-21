import { Router } from 'express';
import { getAllRoles, addRole, updateRole, delRole } from '../Controllers/rolecontroller.js';


const route = Router();
route.get('/', getAllRoles);
route.post('/',  roleValidationRules, addRole);
route.put('/:id', roleValidationRules, updateRole);
route.delete('/:id', delRole);

export default route;
