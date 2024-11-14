import { Router } from 'express'; // Import du routeur Express
import {
    creerAlerte,
    obtenirAlertes,
    mettreAJourAlerte,
    supprimerAlerte,
    envoyerNotification
} from '../Controllers/alertecontroller.js';

const route =Router();

// Route pour créer une nouvelle alerte
route.post('/alertes', creerAlerte);

// Route pour obtenir toutes les alertes
route.get('/alertes', obtenirAlertes);

// Route pour mettre à jour une alerte
route.put('/alertes/:id', mettreAJourAlerte);

// Route pour supprimer une alerte
route.delete('/alertes/:id', supprimerAlerte);

// Route pour envoyer une notification
route.post('/alertes/:id/notification', envoyerNotification);

export default route;