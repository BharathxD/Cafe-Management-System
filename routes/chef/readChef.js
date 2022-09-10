const express = require('express');
const router= express.Router();
const readChefController = require('../../controller/chef/readChefController');

router.get('/viewchef/:chefid', readChefController.read);

module.exports = router;