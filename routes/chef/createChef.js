const express = require('express');
const router= express.Router();
const createChefController = require('../../controller/chef/createChefController');

router.get('/newchef', createChefController.add);
router.post('/newchef', createChefController.onSubmit);

module.exports = router;