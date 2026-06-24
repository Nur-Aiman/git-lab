// In-memory data store for motorcycles (in production, this would be a database)
let motorcycles = [
  { id: 1, brand: 'Harley-Davidson', model: 'Street 750', price: 7249, engineSize: '750cc', type: 'Cruiser' },
  { id: 2, brand: 'Yamaha', model: 'YZF-R3', price: 4699, engineSize: '321cc', type: 'Sport' },
  { id: 3, brand: 'Honda', model: 'CB500F', price: 6399, engineSize: '471cc', type: 'Naked' }
];

let nextId = 4;

class Motorcycle {
  static getAll() {
    return motorcycles;
  }

  static getById(id) {
    return motorcycles.find(motorcycle => motorcycle.id === parseInt(id));
  }

  static create(data) {
    const newMotorcycle = {
      id: nextId++,
      brand: data.brand,
      model: data.model,
      price: data.price,
      engineSize: data.engineSize,
      type: data.type
    };
    motorcycles.push(newMotorcycle);
    return newMotorcycle;
  }

  static update(id, data) {
    const motorcycle = motorcycles.find(motorcycle => motorcycle.id === parseInt(id));
    if (motorcycle) {
      if (data.brand) motorcycle.brand = data.brand;
      if (data.model) motorcycle.model = data.model;
      if (data.price) motorcycle.price = data.price;
      if (data.engineSize) motorcycle.engineSize = data.engineSize;
      if (data.type) motorcycle.type = data.type;
    }
    return motorcycle;
  }

  static delete(id) {
    const index = motorcycles.findIndex(motorcycle => motorcycle.id === parseInt(id));
    if (index !== -1) {
      const deletedMotorcycle = motorcycles[index];
      motorcycles.splice(index, 1);
      return deletedMotorcycle;
    }
    return null;
  }

  static getByBrand(brand) {
    return motorcycles.filter(motorcycle => motorcycle.brand.toLowerCase() === brand.toLowerCase());
  }

  static getByType(type) {
    return motorcycles.filter(motorcycle => motorcycle.type.toLowerCase() === type.toLowerCase());
  }
}

module.exports = Motorcycle;
