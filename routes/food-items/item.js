const express = require('express');
const router= express.Router();
const itemController = require('../../controller/food-items/itemController');
const addToDashboardController = require('../../controller/food-items/addToDashboardController');
const createItemController = require('../../controller/food-items/createItemController');
const deleteItemController = require('../../controller/food-items/deleteItemController');
const readItemController = require('../../controller/food-items/readItemController');
const updateItemController = require('../../controller/food-items/updateItemController');

router.use((req, res, next) => {
    res.locals.myRoute = 'item'
    next();
});

router.get('/item', itemController.view);
router.get('/item/:filter', itemController.filter);
router.post('/item', itemController.find);

router.get('/addtodashboard/:id', addToDashboardController.add);
router.post('/addtodashboard', addToDashboardController.onSubmit);

router.get('/deleteitem/:id', deleteItemController.delete);
router.get('/readitem/:itemid', readItemController.read);

router.get('/edititem/:id', updateItemController.edit);
router.post('/edititem/:id', updateItemController.onEdit);

router.get('/newitem', createItemController.add);
router.post('/newitem', createItemController.onSubmit);

module.exports = router;