const express = require('express');
const router= express.Router();
const deleteItemController = require('../../controller/food-items/deleteItemController');

router.get('/deleteitem/:id', deleteItemController.delete);

module.exports = router;