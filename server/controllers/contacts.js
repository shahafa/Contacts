import contacts from '../models/contacts.js';

export function get(req, res) {
  const page = req.params.page;

  contacts.find({}).skip(page * 10).limit(10).exec((err, topics) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(topics);
  });
}

export default {
  get
};
