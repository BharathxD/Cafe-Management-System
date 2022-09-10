const express = require('express');
const router= express.Router();
const deleteUserController = require('../../controller/user/deleteUserController');

router.get('/deleteuser/:id', deleteUserController.delete);

module.exports = router;