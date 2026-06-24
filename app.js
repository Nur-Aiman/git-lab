const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const electricCarRoutes = require('./routes/electricCarRoutes');
const houseRoutes = require('./routes/houseRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/', homeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/electric-cars', electricCarRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/hello', (req, res, next) => {
  if (req.method === 'POST') {
    return next();
  }
  res.status(405).json({ error: 'Method not allowed' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET  /`);
  console.log(`  POST /api/hello`);
  console.log(`  GET  /api/users`);
  console.log(`  GET  /api/users/:id`);
  console.log(`  POST /api/users`);
  console.log(`  DELETE /api/users/:id`);
  console.log(`  GET  /api/electric-cars`);
  console.log(`  GET  /api/electric-cars/:id`);
  console.log(`  GET  /api/electric-cars/brand/:brand`);
  console.log(`  GET  /api/electric-cars/price/filter (with ?minPrice=X&maxPrice=Y)`);
  console.log(`  POST /api/electric-cars`);
  console.log(`  PUT  /api/electric-cars/:id`);
  console.log(`  DELETE /api/electric-cars/:id`);
  console.log(`  GET  /api/houses`);
  console.log(`  GET  /api/houses/:id`);
  console.log(`  GET  /api/houses/bedrooms/:bedrooms`);
  console.log(`  GET  /api/houses/price/filter (with ?minPrice=X&maxPrice=Y)`);
  console.log(`  POST /api/houses`);
  console.log(`  PUT  /api/houses/:id`);
  console.log(`  DELETE /api/housetric-cars/:id`);
  console.log(`  DELETE /api/users/:id`);
});
