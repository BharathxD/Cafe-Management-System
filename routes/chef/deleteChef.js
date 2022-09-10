const express = require('express');
const router= express.Router();
const deleteChefController = require('../../controller/chef/deleteChefController');

router.get('/deletechef/:id', deleteChefController.delete);

module.exports = router;