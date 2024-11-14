// Importer les entités sans relations
import Role from "./Role.js";
import Employe from "./Employe.js";
import Absence from "./Absence.js";
import Conge from "./Conge.js";
import Retard from "./Retard.js";

// Création des relations

// Relation plusieurs-à-plusieurs entre Employe et Role via une table de liaison 'employe_role'
Role.belongsToMany(Employe, {
    through: 'employe_role',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});
Employe.belongsToMany(Role, {
    through: 'employe_role',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});

// Relation un-à-plusieurs entre Employe et Absence
Employe.hasMany(Absence, {
    foreignKey: 'employe_id', // Clé étrangère dans Absence qui pointe vers Employe
    onDelete: 'CASCADE', // Supprime les absences associées si l'employé est supprimé
    onUpdate: 'RESTRICT', //EMPECHE LA MISSE A Jour SI L REFERENCE DE L'EMPLOYE EST MODIFIE
});
Absence.belongsTo(Employe, {
    foreignKey: 'employe_id',
    onUpdate:    'RESTRICT',
});

// Relation un-à-plusieurs entre Employe et Conge
Employe.hasMany(Conge, {
    foreignKey: 'employe_id',
    as: 'conges',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});
Conge.belongsTo(Employe, {
    foreignKey: 'employe_id',
    as: 'employe',
    onUpdate: 'RESTRICT',
});

// Relation un-à-plusieurs entre Employe et Retard
Employe.hasMany(Retard, {
    foreignKey: 'employe_id',
    as: 'retards',
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});
Retard.belongsTo(Employe, {
    foreignKey: 'employe_id',
    as: 'employe',
    onUpdate: 'RESTRICT',
});


// Exporter les modèles pour les utiliser dans d'autres parties du projet
export { Role, Employe, Absence , Conge, Retard };
