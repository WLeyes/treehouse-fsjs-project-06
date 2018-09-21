const express = require('express');
const app = express();

// static resources
app.use('/static', express.static('public'));

// Set render engine
app.set('view engine', 'pug');


// export app to use inside bin
module.exports = app;