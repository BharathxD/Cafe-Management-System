const express = require('express');
const router= express.Router();
const userController = require('../../controller/user/userController');
const deleteUserController = require('../../controller/user/deleteUserController');
const createUserController = require('../../controller/user/createUserController');
const readUserController = require('../../controller/user/readUserController');
const updateUserController = require('../../controller/user/updateUserController');

router.use((req, res, next) => {
    res.locals.myRoute = 'ourteam'
    next();
});

router.get('/ourteam', userController.view);
router.post('/ourteam', userController.find);
router.get('/newuser', createUserController.add);
router.post('/newuser', createUserController.onSubmit);
router.get('/edituser/:id', updateUserController.edit);
router.post('/edituser/:id', updateUserController.onEdit);
router.get('/viewuser/:id', readUserController.read);
router.get('/deleteuser/:id', deleteUserController.delete);

module.exports = router;