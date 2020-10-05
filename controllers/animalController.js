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

// Create
router.post('/', (req, res) => {
  req.body.hungry = req.body.hungry === 'on';

  db.Animal.create(req.body, (err, newAnimal) => {
    if (err) return console.log(err);

    res.redirect(`/animals`);
  });
});

module.exports = router;