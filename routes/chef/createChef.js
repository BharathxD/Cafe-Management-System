const express = require('express');
const router = express.Router();

router.get('/newchef',(req, res) => {
    res.render('newchef');
});

module.exports = router;