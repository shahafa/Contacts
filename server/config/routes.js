const Contacts = require('./../controllers/Contacts');
const path = require('path');

let staticPath = path.join(__dirname, '../..', 'dist/');
if (process.env.NODE_ENV === 'development') {
  staticPath = path.join(__dirname, '../..', 'app/');
}

function routesConfig(app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  app.get('/contacts', Contacts.get);
  app.get('/contacts/count/', Contacts.count);
}

module.exports = routesConfig;
