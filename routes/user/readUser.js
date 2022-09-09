const express = require('express');
const router= express.Router();
const readUserController = require('../../controller/user/readUserController');

router.get('/viewuser/:id', readUserController.read);

module.exports = router;