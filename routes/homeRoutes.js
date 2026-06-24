const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.welcome);
router.post('/hello', HomeController.sayHello);

module.exports = router;
