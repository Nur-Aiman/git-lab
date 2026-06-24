const express = require('express');
const router = express.Router();
const ElectricCarController = require('../controllers/ElectricCarController');

// Get all electric cars
router.get('/', ElectricCarController.getAll);

// Get electric car by ID
router.get('/:id', ElectricCarController.getById);

// Get electric cars by brand
router.get('/brand/:brand', ElectricCarController.getByBrand);

// Get electric cars by price range
router.get('/price/filter', ElectricCarController.getByPriceRange);

// Create new electric car
router.post('/', ElectricCarController.create);

// Update electric car
router.put('/:id', ElectricCarController.update);

// Delete electric car
router.delete('/:id', ElectricCarController.delete);

module.exports = router;
