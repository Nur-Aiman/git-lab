const Motorcycle = require('../models/Motorcycle');

class MotorcycleController {
  static getAll(req, res) {
    try {
      const motorcycles = Motorcycle.getAll();
      res.json(motorcycles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getById(req, res) {
    try {
      const motorcycle = Motorcycle.getById(req.params.id);
      
      if (!motorcycle) {
        return res.status(404).json({ error: 'Motorcycle not found' });
      }
      
      res.json(motorcycle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static create(req, res) {
    try {
      const { brand, model, price, engineSize, type } = req.body;
      
      if (!brand || !model || !price || !engineSize || !type) {
        return res.status(400).json({ error: 'Brand, model, price, engineSize, and type are required' });
      }
      
      const newMotorcycle = Motorcycle.create({ brand, model, price, engineSize, type });
      res.status(201).json(newMotorcycle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static update(req, res) {
    try {
      const { brand, model, price, engineSize, type } = req.body;
      
      const motorcycle = Motorcycle.update(req.params.id, { brand, model, price, engineSize, type });
      
      if (!motorcycle) {
        return res.status(404).json({ error: 'Motorcycle not found' });
      }
      
      res.json(motorcycle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static delete(req, res) {
    try {
      const motorcycle = Motorcycle.delete(req.params.id);
      
      if (!motorcycle) {
        return res.status(404).json({ error: 'Motorcycle not found' });
      }
      
      res.json({ message: 'Motorcycle deleted successfully', motorcycle });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getByBrand(req, res) {
    try {
      const { brand } = req.params;
      
      if (!brand) {
        return res.status(400).json({ error: 'Brand is required' });
      }
      
      const motorcycles = Motorcycle.getByBrand(brand);
      
      if (motorcycles.length === 0) {
        return res.status(404).json({ error: `No motorcycles found for brand: ${brand}` });
      }
      
      res.json(motorcycles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getByType(req, res) {
    try {
      const { type } = req.params;
      
      if (!type) {
        return res.status(400).json({ error: 'Type is required' });
      }
      
      const motorcycles = Motorcycle.getByType(type);
      
      if (motorcycles.length === 0) {
        return res.status(404).json({ error: `No motorcycles found of type: ${type}` });
      }
      
      res.json(motorcycles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MotorcycleController;
