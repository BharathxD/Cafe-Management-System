const express = require('express');
const router= express.Router();

const dashboardController = require('../../controller/dashboard/dashboardController');
const deleteDashboardController = require('../../controller/dashboard/deleteDashboardController');
const readDashboardController = require('../../controller/dashboard/readDashboardController');

router.use((req, res, next) => {
    res.locals.myRoute = 'getDashboard'
    next();
});

router.get('/', dashboardController.view);
router.post('/', dashboardController.find);

//? Does nothing but returns to homepage

router.post('/getDashboard', dashboardController.onSearch);

router.get('/delete-dashboard-item/:id', deleteDashboardController.delete);


router.get('/readorders/:id', readDashboardController.read);
router.get('/orders', (req, res) => {
    res.render('dashboard/orders');
});

module.exports = router;



