const Contacts = require('./../controllers/Contacts');

function routesConfig(app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: __dirname
    });
  });

  app.get('/contacts/count/', Contacts.count);
  app.get('/contacts/:page', Contacts.get);
}

module.exports = routesConfig;
