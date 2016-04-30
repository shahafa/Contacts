const contacts = require('../models/contacts.js');

class Contacts {
  static get(req, res) {
    const page = req.params.page;

    contacts.find({}).skip(page * 10).limit(10).exec((err, contactsList) => {
      if (err) {
        console.log('Error in first query');
        return res.status(500).send('Something went wrong getting the data');
      }

      return res.json(contactsList);
    });
  }

  static count(req, res) {
    contacts.count({}, (err, contactsCount) => {
      if (err) {
        console.log('Error in count query');
        return res.status(500).send('Something went wrong getting the data');
      }

      return res.json(contactsCount);
    });
  }
}

module.exports = Contacts;
