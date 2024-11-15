import { Router } from 'express';
import { getAllEmployes, addEmployes, updateEmploye, delEmploye ,getEmployeAbsences, addRoleToEmploye,getEmployeRoles } from '../Controllers/employecontroller.js';


//Importer la fonction pour charger les images/fichiers
import upload from "../helpers/fileLoader.js";
import { verifierToken } from "../authentification/verifierToken.js";


const route = Router()
route.post('/', upload.single('photo'), addEmployes)
route.all("*",verifierToken)
//route.all("*",autoriser(["admin"])) 
route.get('/', getAllEmployes);
route.post('/',  addEmployes);
route.put('/:id', updateEmploye);
route.delete('/:id', delEmploye);
route.get('/:id/absences', getEmployeAbsences);
route.post('/:id/roles/:roleId', addRoleToEmploye);
route.get('/:id/roles', getEmployeRoles);

export default route;