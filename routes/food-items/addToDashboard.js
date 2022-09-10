const express = require('express');
const router= express.Router();
const addToDashboardController = require('../../controller/food-items/addToDashboardController');

router.get('/addtodashboard/:id', addToDashboardController.add);
router.post('/addtodashboard', addToDashboardController.onSubmit);

module.exports = router;