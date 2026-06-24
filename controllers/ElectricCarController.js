const ElectricCar = require('../models/ElectricCar');

class ElectricCarController {
  static getAll(req, res) {
    try {
      const cars = ElectricCar.getAll();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getById(req, res) {
    try {
      const car = ElectricCar.getById(req.params.id);
      
      if (!car) {
        return res.status(404).json({ error: 'Electric car not found' });
      }
      
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static create(req, res) {
    try {
      const { brand, model, price, batteryCapacity, range } = req.body;
      
      if (!brand || !model || !price || !batteryCapacity || !range) {
        return res.status(400).json({ error: 'Brand, model, price, batteryCapacity, and range are required' });
      }
      
      const newCar = ElectricCar.create({ brand, model, price, batteryCapacity, range });
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static update(req, res) {
    try {
      const { brand, model, price, batteryCapacity, range } = req.body;
      
      const car = ElectricCar.update(req.params.id, { brand, model, price, batteryCapacity, range });
      
      if (!car) {
        return res.status(404).json({ error: 'Electric car not found' });
      }
      
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static delete(req, res) {
    try {
      const car = ElectricCar.delete(req.params.id);
      
      if (!car) {
        return res.status(404).json({ error: 'Electric car not found' });
      }
      
      res.json({ message: 'Electric car deleted successfully', car });
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
      
      const cars = ElectricCar.getByBrand(brand);
      
      if (cars.length === 0) {
        return res.status(404).json({ error: `No electric cars found for brand: ${brand}` });
      }
      
      res.json(cars);
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
      
      const cars = ElectricCar.getByPriceRange(parseInt(minPrice), parseInt(maxPrice));
      
      if (cars.length === 0) {
        return res.status(404).json({ error: `No electric cars found in price range: $${minPrice} - $${maxPrice}` });
      }
      
      res.json(cars);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ElectricCarController;
