const express = require('express');
const pool = require('../database');
const router = express.Router();
const { isloLoggeedIn } = require('../lib/auth');


router.get('/', (req, res) => {
    res.render('heladeriaViews/menu');
    // res.send("Menu");
});

router.get('/prueba', (req, res) => {
    res.render('heladeriaViews/prueba');
    // res.send("Menu");
});


router.get('/productos',isloLoggeedIn , async (req, res) => {
    const helados = await pool.query('SELECT * FROM productos');
    console.log({helados});

    res.render('heladeriaViews/productos',{ helados });
    // res.send("Helados")
});

router.get('/carrito/:id',isloLoggeedIn, async (req,res) => {
    const id_productos = new Array();
    const id_usuario = req.params.id;
    const response = await pool.query('SELECT * FROM carrito WHERE id_usuario = ?',[id_usuario]);

    if(response[0]){
        response.forEach( (x) => {
            if(id_productos.indexOf(x['id_producto']) === -1){
                id_productos.push(x['id_producto']);
            }  
        });
        const productos = await pool.query('SELECT * FROM productos WHERE id in ('+[id_productos]+')');
        // res.send(producto);
        console.log({productos});

        res.render('heladeriaViews/prueba', {productos} );

    }
    else{
        
    }
    

    // res.json({response});

});

router.post('/carrito',isloLoggeedIn,async (req,res) => {

    const id_usuario = req.user.id;
    const { id_producto, precioxUni } = req.body;
    
    const boolProduct = await pool.query('SELECT * FROM carrito WHERE id_usuario = ? AND id_producto = ?',[id_usuario,id_producto]);
    
    console.log(boolProduct);
    if(!boolProduct[0]){
        const newCarrito = {
            id_usuario,
            id_producto,
            subTotal:precioxUni,
            cantidad:1
        };
        console.log("no hay producto");
        const newProduct = await pool.query('INSERT INTO carrito set ? ',[newCarrito]);
        req.flash('registroCorrecto','El producto ha sido añadido satisfactorimente');
    }else{
        console.log("si hay producto");
        
        // const addProducto
    }

    // console.log("se añade el producto con id " + idProducto);

    // const response = await pool.query('SELECT * FROM productos WHERE id = ?',[idProducto]);
    // console.log("respuesta "+response[0]['id']);

    // res.redirect('/twist/productos');
});

module.exports = router;
