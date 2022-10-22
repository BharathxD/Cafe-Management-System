const express = require('express');
const router= express.Router();

const exportController = require('../../controller/dashboard/exportController');

router.get('/get-csv', exportController.csv);
router.get('/get-item-csv', exportController.item_csv);
router.get('/get-chef-csv', exportController.chef_csv);
router.get('/get-customer-csv', exportController.customer_csv);
router.get('/get-invoice-csv', exportController.invoice_csv);
module.exports = router;