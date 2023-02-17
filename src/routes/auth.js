const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/login',(req ,res) => {
    res.render('heladeriaViews/login');
});
    
router.post('/login',async(req ,res) => {
    console.log(req.body);
    const { usuario,password } = req.body;
    // const obtenerUsuario = { usuario,password };
    const response = await pool.query('SELECT * FROM usuarios WHERE usuario = "'+usuario+'" and password = "'+password+'"');
    console.log(response);
    if(response[0]){
        res.send('Bienvenido '+response[0]['usuario']);
    }else{
        res.send('ERROR');

    };
});

router.get('/logup',(req ,res) => {
    res.render('heladeriaViews/logup');
});

router.post('/logup', async (req ,res) => {
    console.log(req.body);
    const { usuario,password,nombres,apellidos,fechaNac,telefono,correo } = req.body;
    const nuevoUsuario = {
        usuario,
        password,
        nombres,
        apellidos,
        fechaNac,
        telefono,
        correo
    };
    await pool.query('INSERT INTO usuarios set ?', [nuevoUsuario]);
    
    res.send("Registrado");

});


module.exports = router;