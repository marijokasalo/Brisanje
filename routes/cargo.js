const express = require('express');
const router = express.Router();
const Cargo = require('../models/CargoModel');

router.post('/add', (req, res, next) => {
  const cargo = new Cargo({
    name: req.body.name,
    weight: req.body.weight,
    // Add all the other fields you need
  });

  cargo.save()
    .then(() => {
      res.status(201).json({
        message: 'Cargo added successfully'
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
});

module.exports = router;
