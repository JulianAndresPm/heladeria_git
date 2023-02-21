const mysql = require('mysql');
const { promisify } = require('util')
const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,conncetion) => {
    if(err){
        console.error("Error : ",err.code);
    };
    if(conncetion) {
        conncetion.release
        console.log("Conectado a la DB");
    }
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;