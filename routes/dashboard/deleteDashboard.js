const express = require('express');
const router= express.Router();
const deleteDashboardController = require('../../controller/dashboard/deleteDashboardController');

router.get('/delete-dashboard-item/:id', deleteDashboardController.delete);

module.exports = router;