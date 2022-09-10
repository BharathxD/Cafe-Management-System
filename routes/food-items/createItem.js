const express = require('express');
const router= express.Router();
const createItemController = require('../../controller/food-items/createItemController');

router.get('/newitem', createItemController.add);
router.post('/newitem', createItemController.onSubmit);

module.exports = router;