const Item = require('../models/Item');

// Create
const createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all
const getAllItems = async (req, res) => {
  try {
    const { name, category } = req.query;
    const filter = {};

    if (name) filter.name = new RegExp(name, 'i');
    if (category) filter.category = category;

    const items = await Item.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getItemByID = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete
const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Low stock
const lowStock = async (req, res) => {
  try {
    const items = await Item.find({ $expr: { $lt: ['$quantity', '$restockThreshold'] } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemByID,
  updateItem,
  deleteItem,
  lowStock,
};
