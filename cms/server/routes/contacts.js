var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Contact = require('../models/contact');

function returnError(res, error) {
  res.status(500).json({
    contacts: 'An error occurred',
    error: error
  });
}

router.get('/', (res) => {
    Contact.find()
    .populate('group')
    .exec(function (err, contacts) {
      if (err) {
        return res.status(500).json({
          title: 'an error occurred',
          error: err
        });
      }
      res.status(200).json({
        contact: 'success',
        obj: contacs
      });
    })
});

router.post('/', (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId("contacts");

  const contacts = new Contact({
    id: maxMessageId,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });

  contacts.save()
    .then(createdMessage => {
      res.status(201).json({
        contacts: 'Contact added successfully',
        messageId: createdMessage.id
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.put('/:id', (req, res, next) => {
  Contact.findOne({ id: req.params.id })
    .then(contacts => {
      contacts.name = req.body.name;
      contacts.description = req.body.description;
      contacts.url = req.body.url;

      Contact.updateOne({ id: req.params.id }, contacts)
        .then(result => {
          res.status(204).json({
            contacts: 'Contact updated successfully'})
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      res.status(500).json({
        contacts: 'Contact not found.',
        error: { contacts: 'Contact not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Contact.findOne({ id: req.params.id })
    .then(contacts => {
      Contact.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({ contacts: "Contact deleted successfully" });
        })
        .catch(error => {
          returnError(res, error);
        })
    })
    .catch(error => {
      returnError(res, error);
    });
});

module.exports = router;