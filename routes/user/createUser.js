const express = require('express');
const router= express.Router();
const createUserController = require('../../controller/user/createUserController');

router.get('/newuser', createUserController.add);
router.post('/newuser', createUserController.onSubmit);

module.exports = router;