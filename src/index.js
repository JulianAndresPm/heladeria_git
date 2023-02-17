// importaicones
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv');


// inicializaciones
const app = express();

// configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))
app.set('view engine','.hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// variable globales
app.use((req,res,next) => {
    next();
});

// rutas
app.use(require('./routes'));
app.use('/twist',require('./routes/auth'));
app.use('/twist',require('./routes/helados'));

// archivos publicos
app.use(express.static(path.join(__dirname,'public')));



// inicio del servidor
app.listen(app.get('port'), () =>{
    console.log("Server corriendo en el puerto: " + app.get('port'));
});
