const express = require('express');
const router= express.Router();
const updateUserController = require('../../controller/user/updateUserController');

router.get('/edituser/:id', updateUserController.edit);
router.post('/edituser/:id', updateUserController.onEdit);

module.exports = router;