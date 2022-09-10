const express = require('express');
const router= express.Router();
const dashboardController = require('../../controller/dashboard/dashboardController');

router.get('/', dashboardController.view);
router.get('/successful', (req, res) => {
    res.render('successful', {
        getSearchResults: 'orderSearchResults'
    }
    );
});
router.post('/', dashboardController.find);

module.exports = router;