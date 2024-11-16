// controllers/auditlog.js
import AuditLog from '../Models/Auditlog.js'; 
import {validationResult} from "express-validator";

export const createAuditLog = async (req, res) => {
  // Vérification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { action, userId, details } = req.body; 

    const newAuditLog = await AuditLog.create({
      action,
      userId,
      details,
    });

    res.status(201).json(newAuditLog); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating audit log', error }); 
  }
};