const express = require('express');
const router = express.Router();
const updateChefController = require('../../controller/chef/updateChefController');

router.get('/editchef/:id', updateChefController.edit);
router.post('/editchef/:id', updateChefController.onEdit);

module.exports = router;