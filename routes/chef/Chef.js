const express = require('express');
const router= express.Router();
const chefController = require('../../controller/chef/chefController');

router.get('/chefs', chefController.view);
router.post('/chefs', chefController.find);

module.exports = router;