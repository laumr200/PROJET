import Retard from '../Models/Retard.js';
import Employe from '../Models/Employe.js';


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
        res.status(500).json({ error: 'erreur a l`heure de creer un retard' });
    }
};

// Obtenir tous les retards
export const getAllRetards = async (req, res) => {
    try {
        const retards = await Retard.findAll({ include: { model: Employe, as: 'employe' } });
        res.status(200).json(retards);
    } catch (error) {
        res.status(500).json({ error: ' L´erreur pour obtenirle retard' });
    }
};

// Obtenir un retard par ID
export const getRetardById = async (req, res) => {
    try {
        const retard = await Retard.findByPk(req.params.id, { include: { model: Employe, as: 'employe' } });
        res.status(200).json(retard || { error: 'Retard pas trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'l´erreur pour obtenir le retard' });
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
        res.status(200).json({ message: updated ? 'retard à mis jour' : 'retard pas trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'l´erreur à mis jour le retard' });
    }
};

// Supprimer un retard
export const deleteRetard = async (req, res) => {
    try {
        const deleted = await Retard.destroy({ where: { id: req.params.id } });
        res.status(deleted ? 204 : 404).json({ message: deleted ? '' : 'le retard pas trouvé' });
    } catch (error) {
        res.status(500).json({ error: 'erreur à suprrimer le retard' });
    }
};