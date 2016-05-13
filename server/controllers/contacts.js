const contacts = require('../models/contacts.js');

class Contacts {

  static get(req, res) {
    let page = parseInt(req.query.page, 10);
    if (page == null) {
      page = 1;
    }

    let query = req.query.query;
    if (query == null || query === '') {
      query = {};
    } else {
      query = JSON.parse(`{"$text": {"$search": "${query}"}}`);
    }

    let count = parseInt(req.query.count, 10);
    if (count == null) {
      count = 100;
    }

    contacts.find(query).skip(page * count).limit(count).exec((err, contactsList) => {
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
