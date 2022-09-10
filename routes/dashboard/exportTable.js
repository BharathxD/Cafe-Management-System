const express = require('express');
const router = require('./deleteDashboard');
const app = express();
const exportController = require('../../controller/dashboard/exportController');

router.get('/get-csv', exportController.csv);

module.exports = router;