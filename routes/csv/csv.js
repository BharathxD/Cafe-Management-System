const express = require('express');
const router= express.Router();

const exportController = require('../../controller/csv/exportController');

//* Dashboard *//

router.get('/get-csv', exportController.csv);

//* Appetizer *//

router.get('/get-item-csv', exportController.item_csv);

//* Chef *//

router.get('/get-chef-csv', exportController.chef_csv);

//* Customer *//

router.get('/get-customer-csv', exportController.customer_csv);

//* Invoice *//

router.get('/get-invoice-csv', exportController.invoice_csv);

module.exports = router;