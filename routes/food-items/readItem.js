const express = require('express');
const router= express.Router();
const readItemController = require('../../controller/food-items/readItemController');

router.get('/readitem/:itemid', readItemController.read);

module.exports = router;