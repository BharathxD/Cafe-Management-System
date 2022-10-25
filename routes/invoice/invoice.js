const express = require('express');
const router= express.Router();

const invoiceController = require('../../controller/invoice/invoiceController');

router.use((req, res, next) => {
    res.locals.myRoute = 'getDashboard'
    next();
});

router.get('/invoice', invoiceController.view);
router.post('/invoice', invoiceController.find);

router.get('/invoice/delete/:id', invoiceController.onDelete);

module.exports = router;