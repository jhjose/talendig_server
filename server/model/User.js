const connection = require('../controller/DatabaseController');

let user;

const getUserByUsernameEmail = (username, email)=>{

    connection.query(`SELECT * FROM users WHERE username="${username}" OR email="${email}" LIMIT 1;`, [user], function(err, res, field){
        console.log('res.length', res.length)
        if(err){
            throw err;
        }

        if(res.length){
            user = res[0];
        }else{
            user = null;
        }

    });

    return user;
}
/*
const userByEmail = (email, req)=>{

    let result = null;

    connection.query(`SELECT * FROM users WHERE email="${email}" LIMIT 1;`, [result, req], function(err, res, field){
        console.log('res.length', res.length)
        if(err){
            throw err;
        }

        if(res.length){
            result = res[0];
        }

    });

    return result;
}
*/
function userByEmail(email) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE email="${email}" LIMIT 1;`;
      let query = connection.query(sql, (err, result, field) => {
        if(err) return reject(err);

        resolve(Object.values(JSON.parse(JSON.stringify(result))));
      });
    });
}

const checkIfUserExists = (username, email)=>{
    let result = false;

    connection.query(`SELECT * FROM users WHERE username="${username}" OR email="${email}" LIMIT 1;`, [result], function(err, res, field){
        if(err){
            throw err;
        }

        return !res.length;

    });

    return result;
}

const create = (data)=>{

    connection.query(`INSERT INTO users (username, email, password, country, status) VALUES ("${data.username}", "${data.email}", "${data.password}", 
        "${data.country}", "${data.state}")`, 
        function(err, res, field){
            if(err){
                throw err;
            }
            return !err;
        });

    connection.query(`SELECT * FROM users WHERE username="${data.username}" LIMIT 1`, [user], function(err, res, field){
        if(err){
            throw err;
        }

        user = res[0];
    });

    return user;
}

module.exports = {
    userByEmail, getUserByUsernameEmail, create, checkIfUserExists,
}

/*module.exports = (sequelize, typeOf) => {
    return sequelize.define(
        'users',
        {
            id: {
                type: typeOf.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: typeOf.STRING
            }
        }
    )
}*/

