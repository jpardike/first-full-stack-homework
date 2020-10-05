// Configuration
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

// View Engine
app.set('view engine', 'ejs');

// Controller

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
})


// Listener
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));