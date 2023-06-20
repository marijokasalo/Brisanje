const express = require('express');
const router = express.Router();
const User = require('../schemas/User');

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Register a new user
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});

module.exports = router;
