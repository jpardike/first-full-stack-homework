const router = require('express').Router();

// Model
const animal = require('../models/Animal');

// Index
router.get('/', (req, res) => {
  res.render('animals/indexAnimal', {
    animal: animal,
  });
})

module.exports = router;