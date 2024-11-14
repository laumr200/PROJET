import database from '../Config/connection.js'; // Import de la connexion à la base de données
import { DataTypes } from 'sequelize'; // Import des types de données Sequelize



// Création du modèle Employé
const Employe = database.define('Employe', {

    nom: {
        type: DataTypes.STRING,
        allowNull: false, // Le nom est obligatoire
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // L'email est obligatoire
        unique: true, // L'email doit être unique
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mot_de_passe:{
        type: DataTypes.STRING,
        allowNull: false // Le nom est obligatoire
    },
    photo:{
        type: DataTypes.STRING,
    },
    date_d_embauche: {
        type: DataTypes.DATEONLY,
        allowNull: false, // La date d'embauche est obligatoire
    },
    
});



export default Employe;