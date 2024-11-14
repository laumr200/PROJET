import database from "../Config/connection.js";// Import de la connexion à la base de données
import { DataTypes } from "sequelize";// Import des types de données Sequelize
import Employe from "./Employe.js";// Import du modèle Employé pour les relations

// Création du modèle Alerte
const Alerte = database.define('Alerte', {

    message_alerte: {
        type: DataTypes.STRING,
        allowNull: false, // Le message d'alerte est obligatoire
        
    },
    date_creation: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date de création est obligatoire
    },
    date_expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date d'expiration est obligatoire
    },
    notification_envoyee: { // Indicateur pour savoir si la notification a été envoyée
        type: DataTypes.BOOLEAN,
        allowNull: false, // La notification est obligatoire
    },
    
});



export default Absence;
