// In-memory data store for houses (in production, this would be a database)
let houses = [
  { id: 1, address: '123 Main St', bedrooms: 3, bathrooms: 2, price: 450000, squareFeet: 2500 },
  { id: 2, address: '456 Oak Ave', bedrooms: 4, bathrooms: 3, price: 650000, squareFeet: 3500 },
  { id: 3, address: '789 Pine Rd', bedrooms: 2, bathrooms: 1, price: 350000, squareFeet: 1800 }
];

let nextId = 4;

class House {
  static getAll() {
    return houses;
  }

  static getById(id) {
    return houses.find(house => house.id === parseInt(id));
  }

  static create(data) {
    const newHouse = {
      id: nextId++,
      address: data.address,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      price: data.price,
      squareFeet: data.squareFeet
    };
    houses.push(newHouse);
    return newHouse;
  }

  static update(id, data) {
    const house = houses.find(house => house.id === parseInt(id));
    if (house) {
      if (data.address) house.address = data.address;
      if (data.bedrooms) house.bedrooms = data.bedrooms;
      if (data.bathrooms) house.bathrooms = data.bathrooms;
      if (data.price) house.price = data.price;
      if (data.squareFeet) house.squareFeet = data.squareFeet;
    }
    return house;
  }

  static delete(id) {
    const index = houses.findIndex(house => house.id === parseInt(id));
    if (index !== -1) {
      const deletedHouse = houses[index];
      houses.splice(index, 1);
      return deletedHouse;
    }
    return null;
  }

  static getByBedroomCount(bedrooms) {
    return houses.filter(house => house.bedrooms === parseInt(bedrooms));
  }

  static getByPriceRange(minPrice, maxPrice) {
    return houses.filter(house => house.price >= minPrice && house.price <= maxPrice);
  }
}

module.exports = House;
