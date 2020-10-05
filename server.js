// Configuration
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// View Engine
app.set('view engine', 'ejs');


// Listener
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));