import contacts from './../controllers/contacts';

function routesConfig(app) {
  app.get('/contacts/:page', contacts.get);
}

export default routesConfig;
