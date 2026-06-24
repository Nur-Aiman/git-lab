const House = require('../models/House');

class HouseController {
  static getAll(req, res) {
    try {
      const houses = House.getAll();
      res.json(houses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getById(req, res) {
    try {
      const house = House.getById(req.params.id);
      
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }
      
      res.json(house);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static create(req, res) {
    try {
      const { address, bedrooms, bathrooms, price, squareFeet } = req.body;
      
      if (!address || !bedrooms || !bathrooms || !price || !squareFeet) {
        return res.status(400).json({ error: 'Address, bedrooms, bathrooms, price, and squareFeet are required' });
      }
      
      const newHouse = House.create({ address, bedrooms, bathrooms, price, squareFeet });
      res.status(201).json(newHouse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static update(req, res) {
    try {
      const { address, bedrooms, bathrooms, price, squareFeet } = req.body;
      
      const house = House.update(req.params.id, { address, bedrooms, bathrooms, price, squareFeet });
      
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }
      
      res.json(house);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static delete(req, res) {
    try {
      const house = House.delete(req.params.id);
      
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }
      
      res.json({ message: 'House deleted successfully', house });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getByBedroomCount(req, res) {
    try {
      const { bedrooms } = req.params;
      
      if (!bedrooms) {
        return res.status(400).json({ error: 'Bedroom count is required' });
      }
      
      const houses = House.getByBedroomCount(bedrooms);
      
      if (houses.length === 0) {
        return res.status(404).json({ error: `No houses found with ${bedrooms} bedroom(s)` });
      }
      
      res.json(houses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getByPriceRange(req, res) {
    try {
      const { minPrice, maxPrice } = req.query;
      
      if (!minPrice || !maxPrice) {
        return res.status(400).json({ error: 'minPrice and maxPrice query parameters are required' });
      }
      
      const houses = House.getByPriceRange(parseInt(minPrice), parseInt(maxPrice));
      
      if (houses.length === 0) {
        return res.status(404).json({ error: `No houses found in price range: $${minPrice} - $${maxPrice}` });
      }
      
      res.json(houses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = HouseController;
