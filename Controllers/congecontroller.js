import Conge from '../Models/Conge.js';
import Employe from '../Models/Employe.js';
import { validationResult } from 'express-validator';

export const createConge = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req); // Vérifie les erreurs de validation
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Si des erreurs existent, retourne un message d'erreur
    }

    try {
        const { date_conge, type_conge, justification, employe_id } = req.body;
        const newConge = await Conge.create({ date_conge, type_conge, justification, employe_id });
        res.status(201).json(newConge);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du congé' });
    }
};

export const getAllConges = async (req, res) => {
    try {
        const conges = await Conge.findAll({ include: { model: Employe, as: 'employe' } });
        res.status(200).json(conges);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des congés' });
    }
};

export const getCongeById = async (req, res) => {
    try {
        const conge = await Conge.findByPk(req.params.id, { include: { model: Employe, as: 'employe' } });
        res.status(200).json(conge || { error: 'Congé non trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du congé' });
    }
};

export const updateConge = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req); // Vérifie les erreurs de validation
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Si des erreurs existent, retourne un message d'erreur
    }

    try {
        const { date_conge, type_conge, justification } = req.body;
        const [updated] = await Conge.update(
            { date_conge, type_conge, justification },
            { where: { id: req.params.id } }
        );
        res.status(200).json({ message: updated ? 'Congé mis à jour' : 'Congé non trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du congé' });
    }
};

export const deleteConge = async (req, res) => {
    try {
        const deleted = await Conge.destroy({ where: { id: req.params.id } });
        res.status(deleted ? 204 : 404).json({ message: deleted ? '' : 'Congé non trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du congé' });
    }
};
