// In-memory data store for electric cars (in production, this would be a database)
let electricCars = [
  { id: 1, brand: 'Tesla', model: 'Model S', price: 89990, batteryCapacity: '100 kWh', range: 405 },
  { id: 2, brand: 'Nissan', model: 'Leaf', price: 29990, batteryCapacity: '62 kWh', range: 226 },
  { id: 3, brand: 'Chevrolet', model: 'Bolt EV', price: 26500, batteryCapacity: '66 kWh', range: 259 }
];

let nextId = 4;

class ElectricCar {
  static getAll() {
    return electricCars;
  }

  static getById(id) {
    return electricCars.find(car => car.id === parseInt(id));
  }

  static create(data) {
    const newCar = {
      id: nextId++,
      brand: data.brand,
      model: data.model,
      price: data.price,
      batteryCapacity: data.batteryCapacity,
      range: data.range
    };
    electricCars.push(newCar);
    return newCar;
  }

  static update(id, data) {
    const car = electricCars.find(car => car.id === parseInt(id));
    if (car) {
      if (data.brand) car.brand = data.brand;
      if (data.model) car.model = data.model;
      if (data.price) car.price = data.price;
      if (data.batteryCapacity) car.batteryCapacity = data.batteryCapacity;
      if (data.range) car.range = data.range;
    }
    return car;
  }

  static delete(id) {
    const index = electricCars.findIndex(car => car.id === parseInt(id));
    if (index !== -1) {
      const deletedCar = electricCars[index];
      electricCars.splice(index, 1);
      return deletedCar;
    }
    return null;
  }

  static getByBrand(brand) {
    return electricCars.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
  }

  static getByPriceRange(minPrice, maxPrice) {
    return electricCars.filter(car => car.price >= minPrice && car.price <= maxPrice);
  }
}

module.exports = ElectricCar;
