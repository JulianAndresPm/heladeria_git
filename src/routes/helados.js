const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('heladeriaViews/menu');
    // res.send("Menu");
});


module.exports = router;
