import Rapport from '../Models/Rapport.js';


export const getRapports = async (req, res) => {
    try {
        const rapports = await Rapport.findAll();
        res.status(200).json(rapports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Créer un rapport
export const createRapport = async (req, res) => {
    const errors = validationResult(req);  // Vérification des erreurs de validation
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // Si erreurs, renvoyer un statut 400
    }

    try {
        const { title, content } = req.body;
        const newRapport = await Rapport.create({ title, content });
        res.status(201).json(newRapport);
    } catch (error) {
        console.error('Erreur lors de la création du rapport:', error);
        res.status(500).json({ error: 'Erreur lors de la création du rapport' });
    }
};