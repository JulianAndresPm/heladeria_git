const helpers = {};

helpers.registerValid = (usuario) =>{
    console.log("Hola mundo "+usuario['usuario']);
    if(usuario['usuario']){
        return true
    }
    else{
        return false
    }

}


module.exports = helpers;

