const Smartphone = require('../models/Smartphone');

class SmartphoneController {
  static getAll(req, res) {
    try {
      const smartphones = Smartphone.getAll();
      res.json(smartphones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getById(req, res) {
    try {
      const smartphone = Smartphone.getById(req.params.id);
      
      if (!smartphone) {
        return res.status(404).json({ error: 'Smartphone not found' });
      }
      
      res.json(smartphone);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static create(req, res) {
    try {
      const { brand, model, price, storage } = req.body;
      
      if (!brand || !model || !price || !storage) {
        return res.status(400).json({ error: 'Brand, model, price, and storage are required' });
      }
      
      const newSmartphone = Smartphone.create({ brand, model, price, storage });
      res.status(201).json(newSmartphone);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static update(req, res) {
    try {
      const { brand, model, price, storage } = req.body;
      
      const smartphone = Smartphone.update(req.params.id, { brand, model, price, storage });
      
      if (!smartphone) {
        return res.status(404).json({ error: 'Smartphone not found' });
      }
      
      res.json(smartphone);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static delete(req, res) {
    try {
      const smartphone = Smartphone.delete(req.params.id);
      
      if (!smartphone) {
        return res.status(404).json({ error: 'Smartphone not found' });
      }
      
      res.json({ message: 'Smartphone deleted successfully', smartphone });
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
      
      const smartphones = Smartphone.getByBrand(brand);
      
      if (smartphones.length === 0) {
        return res.status(404).json({ error: `No smartphones found for brand: ${brand}` });
      }
      
      res.json(smartphones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SmartphoneController;
