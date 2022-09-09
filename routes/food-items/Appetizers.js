const express = require('express');
const router= express.Router();

router.get('/appetizers', (req, res) => {
    res.render('appetizers');
});

module.exports = router;