const express = require('express');
const router= express.Router();
const customerController = require('../../controller/customer/customerController');
const deleteCustomerController = require('../../controller/customer/deleteCustomerController');
const createCustomerController = require('../../controller/customer/createCustomerController');
const readCustomerController = require('../../controller/customer/readCustomerController');
const updateCustomerController = require('../../controller/customer/updateCustomerController');

router.use((req, res, next) => {
    res.locals.myRoute = 'ourteam'
    next();
});

router.get('/customer', customerController.onView);
router.post('/customer', customerController.onSearch);

router.get('/customer/new', createCustomerController.onView);
router.post('/customer/new', createCustomerController.onSubmit);

router.get('/customer/edit/:id', updateCustomerController.onView);
router.post('/customer/edit/:id', updateCustomerController.onEdit);

router.get('/customer/read/:id', readCustomerController.onRead);
router.get('/customer/delete/:id', deleteCustomerController.onDelete);

module.exports = router;