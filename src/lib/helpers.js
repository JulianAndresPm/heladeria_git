const bcrypt = require('bcryptjs');
const helpers = {};

helpers.encriptarContrasena = async (password) => {
    const salt =  await bcrypt.genSalt(10);
    const finalyPassword = await bcrypt.hash(password , salt);
    return finalyPassword;
};

helpers.compararContrasena = async (password, passwordDB) => {
    try {
        return await bcrypt.compare(password,passwordDB);
    } catch (error) {
        console.log("ERROR"+error);
        
    }
}

module.exports = helpers;