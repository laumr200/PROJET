import { Router } from 'express'; // Import du routeur Express
import {
    creerAlerte,
    obtenirAlertes,
    mettreAJourAlerte,
    supprimerAlerte,
    envoyerNotification
} from '../Controllers/alertecontroller.js';




const route =Router();

route.post('/alertes',  creerAlerte);
route.get('/alertes', obtenirAlertes);
route.put('/alertes/:id', mettreAJourAlerte);
route.delete('/alertes/:id', supprimerAlerte);
route.post('/alertes/:id/notification', envoyerNotification);

export default route;