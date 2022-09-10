const express = require('express');
const router= express.Router();
const readDashboardController = require('../../controller/dashboard/readDashboardController');

router.get('/readorders/:id', readDashboardController.read);

module.exports = router;