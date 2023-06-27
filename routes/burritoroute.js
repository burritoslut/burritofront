//burritoroute.js

const express = require('express');
const router = express.Router();
const Burrito = require('../models/burrito'); // Assuming that the Burrito model is in the models directory

// Get all burritos
router.get('/', async (req, res) => {
  try {
    const burritos = await Burrito.find();
    res.json(burritos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific burrito by ID
router.get('/:id', async (req, res) => {
  try {
    const burrito = await Burrito.findById(req.params.id);
    if (!burrito) return res.status(404).send('Burrito not found');
    res.json(burrito);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new burrito
router.post('/', async (req, res) => {
  try {
    const burrito = new Burrito(req.body);
    const savedBurrito = await burrito.save();
    res.status(201).json(savedBurrito);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a specific burrito by ID
router.delete('/:id', async (req, res) => {
  try {
    const removedBurrito = await Burrito.remove({ _id: req.params.id });
    res.json(removedBurrito);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a specific burrito by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedBurrito = await Burrito.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedBurrito);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
