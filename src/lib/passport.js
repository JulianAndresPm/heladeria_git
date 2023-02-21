const passport = require('passport');
const pool = require('../database');
const helpers = require('./helpers');
const localStrategy = require('passport-local').Strategy;

passport.use('local.login', new localStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, usuario, password, done) => {
    console.log(req.body);
    const response = await pool.query('SELECT * FROM usuarios WHERE usuario = ?',[usuario]);
    if(response.lenght > 0){
        const usuario = response[0];
        const valorPasword = await helpers.compararContrasena(password, usuario.password);
        if(valorPasword){
            done(null, usuario, req.flash('loginCorrecto','¡Bienvenido '+ usuario['usuario']+' !'))
        }else{
            done(null,false, req.flash('loginError','Constraseña o Usuario incorrecto'));
        };
    }else{
        return done(null,false,req.flash('loginError','El nombre de usuario no existe'))
    };
}));


passport.use('local.logup', new localStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, usuario, password, done) => {
    console.log(req.body);
    const { nombres,apellidos,fechaNac,telefono,correo } = req.body;
    const nuevoUsuario = {
        usuario,
        password,
        nombres,
        apellidos,
        fechaNac,
        telefono,
        correo
    };
    nuevoUsuario.password = await helpers.encriptarContrasena(password);
    const response = await pool.query('INSERT INTO usuarios set ?', [nuevoUsuario]);
    nuevoUsuario.id  = response.insertId;
    console.log(response);
    return done(null, nuevoUsuario);
}
));


passport.serializeUser((usuario,done) => {
    done(null, usuario.id);
});

passport.deserializeUser( async (id, done ) => {
    const response = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    done(null, response[0]);

});