const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('heladeriaViews/menu');
    // res.send("Menu");
});


router.get('/productos', async (req, res) => {
    const helados = await pool.query('SELECT * FROM productos');
    console.log(helados);
    res.render('heladeriaViews/productos',{ helados });
    // res.send("Helados")
});


router.get('/carrito/:id',async (req,res) => {
    const idProducto = req.params.id;
    console.log("se añade el producto con id " + idProducto);
    res.redirect('/twist/productos');
});

module.exports = router;
