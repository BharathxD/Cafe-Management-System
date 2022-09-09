const express = require('express');
const router= express.Router();

router.get('/chefs', (req, res) => {
    res.render('chefs');
});

module.exports = router;