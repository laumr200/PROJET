
#Système de Gestion des Absences et Retards
Description du projet
Ce projet est un système de gestion des absences, congés, retards, et alertes pour une entreprise. Il permet de suivre et gérer efficacement les employés et leurs statuts administratifs liés à la présence et à la ponctualité.
L'application inclut une gestion structurée des rôles, des employés, et des différents types d'événements (absences, congés, retards). Elle offre également des fonctionnalités avancées comme l'envoi d'alertes automatisées.

Fonctionnalités principales
Gestion des employés : Ajout, modification, suppression et consultation des informations des employés (nom, email, téléphone, adresse, etc.).
Gestion des rôles : Attribution des rôles spécifiques aux employés (exemple : Manager, Employé).
Gestion des absences : Suivi des absences avec des types définis (maladie, congé, vacances, autre).
Gestion des congés : Gestion des demandes de congés des employés.
Gestion des retards : Suivi des retards des employés avec leurs raisons.
Alertes : Envoi d'alertes automatiques en cas d'absence ou de retard.
Sécurité et robustesse : Gestion des relations avec des règles strictes pour éviter les incohérences dans la base de données.
Architecture des relations
Rapports : Cette table contient des informations sur les rapports d'assiduité des employés. Chaque rapport a un titre, un contenu, et des timestamps pour les dates de création et de mise à jour.
AuditLogs : Cette table enregistre les actions des utilisateurs (comme la création de rapports, la connexion, etc.). Elle contient l'action effectuée, l'ID de l'utilisateur, les détails de l'action et des timestamps pour la création et la mise à jour.
Ces deux tables sont indépendantes des autres données, comme les utilisateurs ou les rôles. Elles sont là pour suivre les rapports et enregistrer les actions d'audit.\

Voici la structure des relations entre les entités principales dans le système :

Relation plusieurs-à-plusieurs entre Employés et Rôles :

Chaque employé peut avoir plusieurs rôles.
Chaque rôle peut être attribué à plusieurs employés.
Table de liaison utilisée : employe_role.
Relation un-à-plusieurs entre Employé et Absences :

Un employé peut avoir plusieurs absences.
Si un employé est supprimé, toutes ses absences sont également supprimées.
Relation un-à-plusieurs entre Employé et Congés :

Un employé peut soumettre plusieurs demandes de congé.
Suppression en cascade si un employé est supprimé.
Relation un-à-plusieurs entre Employé et Retards :

Un employé peut avoir plusieurs retards enregistrés.
Suppression en cascade si un employé est supprimé.
Relation un-à-plusieurs entre Employé et Alertes :

Les alertes sont associées à un employé spécifique.
Les alertes sont supprimées automatiquement si l'employé est supprimé.
