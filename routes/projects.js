const express = require('express');
const router = express.Router();
const data  = require('../data.json');
const { projects } = data;

// Projects
router.get('/', (req, res, next) => {
  res.render('project');
});

router.get('/project-:id', (req, res, next) => {
  res.render('project');
});

// View JSON
router.get('/api', (req, res, next) => {
  res.json(data);
});
module.exports = router;