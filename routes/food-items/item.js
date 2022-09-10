const express = require('express');
const router= express.Router();
const itemController = require('../../controller/food-items/itemController');

router.get('/item', itemController.view);
router.post('/item', itemController.find);

module.exports = router;