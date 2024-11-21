import { Router } from 'express'; // Import du routeur Express
import {
    creerAlerte,
    obtenirAlertes,
    mettreAJourAlerte,
    supprimerAlerte,
    envoyerNotification
} from '../Controllers/alertecontroller.js';
import alerteRules from '../Validations/alerteValidation.js';



const route =Router();

route.post('/', alerteRules,  creerAlerte);
route.get('/', obtenirAlertes);
route.put('/:id', alerteRules, mettreAJourAlerte);
route.delete('/:id', supprimerAlerte);
route.post('/:id/notification',alerteRules, envoyerNotification);

export default route;