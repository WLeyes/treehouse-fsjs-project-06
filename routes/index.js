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

// Project
router.get('/project-:id', (req, res, next) => {
  res.render('project', { projects, id: req.params.id});
});

// View JSON
router.get('/api', (req, res, next) => {
  res.json(data);
});

module.exports = router;