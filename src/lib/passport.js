const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use('local.logup',new localStrategy({
    usernameField:'usuario',
    passwordField:'password'
}, async(req,username,password,done) => {
    console.log(req.body);
}
));


// passport.serializeUser((usr,done) => {

// });