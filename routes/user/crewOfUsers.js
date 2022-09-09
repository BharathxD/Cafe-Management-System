const express = require('express');
const router= express.Router();
const userController = require('../../controller/user/userController');

router.get('/ourteam', userController.view);
router.post('/ourteam', userController.find);

module.exports = router;