const express = require('express');
const pool = require('../database');
const router = express.Router();
const { isloLoggeedIn } = require('../lib/auth');

router.get('/', (req, res) => {
    res.render('heladeriaViews/menu');
    // res.send("Menu");
});


router.get('/productos',isloLoggeedIn , async (req, res) => {
    const helados = await pool.query('SELECT * FROM productos');
    console.log(helados);
    res.render('heladeriaViews/productos',{ helados });
    // res.send("Helados")
});


router.get('/carrito/:id',isloLoggeedIn,async (req,res) => {
    let idProducto = new Array();
    idProducto.push(req.params.id);
    console.log("req"+req);
    console.log("se añade el producto con id " + idProducto);

    // const response = await pool.query('SELECT * FROM productos WHERE id = ?',[idProducto]);
    // console.log("espuesta "+response[0]['id']);

    // res.redirect('/twist/productos');
});

module.exports = router;
