// In-memory data store for smartphones (in production, this would be a database)
let smartphones = [
  { id: 1, brand: 'Apple', model: 'iPhone 15', price: 999, storage: '256GB' },
  { id: 2, brand: 'Samsung', model: 'Galaxy S24', price: 899, storage: '256GB' },
  { id: 3, brand: 'Google', model: 'Pixel 8', price: 799, storage: '128GB' }
];

let nextId = 4;

class Smartphone {
  static getAll() {
    return smartphones;
  }

  static getById(id) {
    return smartphones.find(phone => phone.id === parseInt(id));
  }

  static create(data) {
    const newPhone = {
      id: nextId++,
      brand: data.brand,
      model: data.model,
      price: data.price,
      storage: data.storage
    };
    smartphones.push(newPhone);
    return newPhone;
  }

  static update(id, data) {
    const phone = smartphones.find(phone => phone.id === parseInt(id));
    if (phone) {
      if (data.brand) phone.brand = data.brand;
      if (data.model) phone.model = data.model;
      if (data.price) phone.price = data.price;
      if (data.storage) phone.storage = data.storage;
    }
    return phone;
  }

  static delete(id) {
    const index = smartphones.findIndex(phone => phone.id === parseInt(id));
    if (index !== -1) {
      const deletedPhone = smartphones[index];
      smartphones.splice(index, 1);
      return deletedPhone;
    }
    return null;
  }

  static getByBrand(brand) {
    return smartphones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
  }
}

module.exports = Smartphone;
