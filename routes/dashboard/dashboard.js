const express = require('express');
const router= express.Router();
const dashboardController = require('../../controller/dashboard/dashboardController');
const deleteDashboardController = require('../../controller/dashboard/deleteDashboardController');
const exportController = require('../../controller/dashboard/exportController');
const readDashboardController = require('../../controller/dashboard/readDashboardController');
const updateUserController = require('../../controller/user/updateUserController');

router.use((req, res, next) => {
    res.locals.myRoute = ''
    next();
});

router.get('/', dashboardController.view);
router.post('/', dashboardController.find);

router.get('/delete-dashboard-item/:id', deleteDashboardController.delete);
router.get('/get-csv', exportController.csv);
router.get('/get-item-csv', exportController.item_csv);
router.get('/get-user-csv', exportController.user_csv);
router.get('/get-chef-csv', exportController.chef_csv);
router.get('/readorders/:id', readDashboardController.read);

router.get('/edituser/:id', updateUserController.edit);
router.post('/edituser/:id', updateUserController.onEdit);

module.exports = router;