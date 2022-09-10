const express = require('express');
const router = express.Router();
const updateItemController = require('../../controller/food-items/updateItemController');

router.get('/edititem/:id', updateItemController.edit);
router.post('/edititem/:id', updateItemController.onEdit);

module.exports = router;