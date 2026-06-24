class HomeController {
  static welcome(req, res) {
    res.json({ 
      message: 'Welcome to the Express API!',
      version: '1.0.0',
      endpoints: {
        users: '/api/users',
        hello: '/api/hello'
      }
    });
  }

  static sayHello(req, res) {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    res.json({ message: `Hello, ${name}!` });
  }
}

module.exports = HomeController;
