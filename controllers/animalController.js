const router = require('express').Router();

// Model
const db = require('../models');

// Index
router.get('/', (req, res) => {
  db.Animal.find({}, (err, allAnimals) => {
    console.log(allAnimals);

    if (err) return console.log(err);

    res.render('animals/indexAnimal', {
      animals: allAnimals,
    });
  });
})

// New
router.get('/new', (req, res) => {
  res.render('animals/newAnimal');
});

module.exports = router;