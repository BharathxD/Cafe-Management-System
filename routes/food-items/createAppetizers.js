const express = require('express');
const router = express.Router();

router.get('/newappetizer',(req, res) => {
    res.render('newappetizer');
});

module.exports = router;