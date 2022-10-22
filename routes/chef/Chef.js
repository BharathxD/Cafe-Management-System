const express = require('express');
const router= express.Router();
const chefController = require('../../controller/chef/chefController');
const createChefController = require('../../controller/chef/createChefController');
const deleteChefController = require('../../controller/chef/deleteChefController');
const readChefController = require('../../controller/chef/readChefController');
const updateChefController = require('../../controller/chef/updateChefController');

router.use((req, res, next) => {
    res.locals.myRoute = 'chefs'
    next();
});

router.get('/chefs', chefController.view);
router.post('/chefs', chefController.find);

router.get('/newchef', createChefController.add);
router.post('/newchef', createChefController.onSubmit);

router.get('/deletechef/:id', deleteChefController.delete);
router.get('/viewchef/:chefid', readChefController.read);

router.get('/editchef/:id', updateChefController.edit);
router.post('/editchef/:id', updateChefController.onEdit);

module.exports = router;