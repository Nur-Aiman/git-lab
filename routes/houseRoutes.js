const express = require('express');
const router = express.Router();
const HouseController = require('../controllers/HouseController');

// Get all houses
router.get('/', HouseController.getAll);

// Get house by ID
router.get('/:id', HouseController.getById);

// Get houses by bedroom count
router.get('/bedrooms/:bedrooms', HouseController.getByBedroomCount);

// Get houses by price range
router.get('/price/filter', HouseController.getByPriceRange);

// Create new house
router.post('/', HouseController.create);

// Update house
router.put('/:id', HouseController.update);

// Delete house
router.delete('/:id', HouseController.delete);

module.exports = router;
