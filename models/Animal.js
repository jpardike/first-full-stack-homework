// const Animal = [
//   {
//     name: 'Bear',
//     color: 'black',
//     region: 'North America',
//     hungry: true,
//   },
//   {
//     name: 'Otter',
//     color: 'brown',
//     region: 'Worldwide',
//     hungry: false,
//   },
// ];

// module.exports = Animal;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
  region: String,
  hungry: Boolean,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;