const express = require('express');
const router = express.Router();
const data  = require('../data.json');
const { projects } = data;

// Home
router.get('/', (req, res, next) => {
  res.render('index', { projects});
});
 
// About
router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;