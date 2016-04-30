const Contacts = require('./../controllers/Contacts');
const path = require('path');

function routesConfig(app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../')
    });
  });

  app.get('/contacts/count/', Contacts.count);
  app.get('/contacts/:page', Contacts.get);
}

module.exports = routesConfig;
