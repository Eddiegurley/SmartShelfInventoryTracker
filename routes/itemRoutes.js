const express = require('express');
const router = express.Router();
const {
  createItem,
  getAllItems,
  getItemByID,
  updateItem,
  deleteItem,
  lowStock,
} = require('../controllers/itemController');

router.post('/', createItem);
router.get('/', getAllItems);
router.get('/low-stock', lowStock);
router.get('/:id', getItemByID);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
