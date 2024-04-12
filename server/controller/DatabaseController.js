var mysql = require('mysql');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('asdf56as1df65asd1651a6s1df6');

const connect = ()=>{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'talendig_db',
    });
    
    return connection;
}

module.exports = {
    connect
}