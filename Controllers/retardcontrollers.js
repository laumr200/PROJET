import Retard from '../Models/Retard.js';
import Employe from '../Models/Employe.js';
import {validationResult} from "express-validator";

// Créer un retard
export const createRetard = async (req, res) => {
    const errors = validationResult(req);  // Vérification des erreurs de validation
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Si erreurs, renvoyer un statut 400
    }
    try {
        const { date_retard, type_retard, justification, employe_id } = req.body;
        const newRetard = await Retard.create({ date_retard, type_retard, justification, employe_id });
        res.status(201).json(newRetard);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o atraso' });
    }
};

// Obtenir tous les retards
export const getAllRetards = async (req, res) => {
    try {
        const retards = await Retard.findAll({ include: { model: Employe, as: 'employe' } });
        res.status(200).json(retards);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os atrasos' });
    }
};

// Obtenir un retard par ID
export const getRetardById = async (req, res) => {
    try {
        const retard = await Retard.findByPk(req.params.id, { include: { model: Employe, as: 'employe' } });
        res.status(200).json(retard || { error: 'Atraso não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o atraso' });
    }
};

// Mettre à jour un retard
export const updateRetard = async (req, res) => {
        const errors = validationResult(req);  // Vérification des erreurs de validation
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });  // Si erreurs, renvoyer un statut 400
        }
    try {
        const { date_retard, type_retard, justification } = req.body;
        const [updated] = await Retard.update(
            { date_retard, type_retard, justification },
            { where: { id: req.params.id } }
        );
        res.status(200).json({ message: updated ? 'Atraso atualizado' : 'Atraso não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o atraso' });
    }
};

// Supprimer un retard
export const deleteRetard = async (req, res) => {
    try {
        const deleted = await Retard.destroy({ where: { id: req.params.id } });
        res.status(deleted ? 204 : 404).json({ message: deleted ? '' : 'Atraso não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o atraso' });
    }
};