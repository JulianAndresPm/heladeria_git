const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('heladeriaViews/login');
});

// router.post('/login',async(req ,res) => {
//     console.log(req.body);
//     const { usuario,password } = req.body;
//     // const obtenerUsuario = { usuario,password };
//     const response = await pool.query('SELECT * FROM usuarios WHERE usuario = "'+usuario+'" and password = "'+password+'"');
//     console.log(response);
//     if(response[0]){
//         req.flash('loginCorrecto','Bienvenido '+ response[0]['usuario']);
//         res.redirect('/twist/perfil');

//     }else{
//         req.flash('loginError','Constraseña o Usuario incorrecto');
//         res.redirect('/twist/login');
//     };
// });

// router.get('/logup',(req ,res) => {
//     res.render('heladeriaViews/logup');
// });


router.post('/logup', passport.authenticate('local.logup', {
    successRedirect: '/twist/perfil',
    failureRedirect: '/twist/login',
    failureFlash: true
}));

router.post('/login', (req, res) => {
    console.log(req.body);
    passport.authenticate('local.login', {
        successRedirect: '/twist/perfil',
        failureRedirect: '/twist/login',
        failureFlash: true
    })
    // (req, res, next)= {

    // };
});


// router.post('/logup', async (req ,res) => {
//     passport.authenticated('local.logup',{
//         successRedirect: '/twist/perfil',
//         failureRedirect: '/twist/login',
//         failureFlash: true
//     });


//     console.log(req.body);
//     const { usuario,password,nombres,apellidos,fechaNac,telefono,correo } = req.body;
//     const nuevoUsuario = {
//         usuario,
//         password,
//         nombres,
//         apellidos,
//         fechaNac,
//         telefono,
//         correo
//     };
//     await pool.query('INSERT INTO usuarios set ?', [nuevoUsuario]);
//     req.flash('registroCorrecto','El usuario ha sido registrado satisfactorimente')
//     res.redirect('/twist/perfil');
//     // res.send("Registrado");

// });

router.get('/perfil', (req, res) => {
    res.render('heladeriaViews/perfil')
    console.log("Estas en el perfil");
});


module.exports = router;