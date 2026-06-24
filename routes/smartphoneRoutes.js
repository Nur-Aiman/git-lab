const express = require('express');
const router = express.Router();
const SmartphoneController = require('../controllers/SmartphoneController');

// Get all smartphones
router.get('/', SmartphoneController.getAll);

// Get smartphone by ID
router.get('/:id', SmartphoneController.getById);

// Get smartphones by brand
router.get('/brand/:brand', SmartphoneController.getByBrand);

// Create new smartphone
router.post('/', SmartphoneController.create);

// Update smartphone
router.put('/:id', SmartphoneController.update);

// Delete smartphone
router.delete('/:id', SmartphoneController.delete);

module.exports = router;
