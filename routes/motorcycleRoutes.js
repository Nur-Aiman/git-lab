const express = require('express');
const router = express.Router();
const MotorcycleController = require('../controllers/MotorcycleController');

// Get all motorcycles
router.get('/', MotorcycleController.getAll);

// Get motorcycle by ID
router.get('/:id', MotorcycleController.getById);

// Get motorcycles by brand
router.get('/brand/:brand', MotorcycleController.getByBrand);

// Get motorcycles by type
router.get('/type/:type', MotorcycleController.getByType);

// Create new motorcycle
router.post('/', MotorcycleController.create);

// Update motorcycle
router.put('/:id', MotorcycleController.update);

// Delete motorcycle
router.delete('/:id', MotorcycleController.delete);

module.exports = router;
