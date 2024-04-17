const connection = require('../controller/DatabaseController');

let user;

const getUserByUsernameEmail = (username, email)=>{
    try{
        const user_exists = connection.query(`SELECT * FROM users WHERE username="${username}" OR email="${email}" LIMIT 1;`, [user], function(err, res, field){
            if(err){
              throw err;
            }
           
            user = res[0];
        });

        return user;
        
    }catch(e){
        console.log('e', e)
    }
}

const create = (data)=>{
    connection.query(`INSERT INTO users (username, email, password, country, status) VALUES ("${data.username}", "${data.email}", "${data.password}", 
        "${data.country}", "${data.state}")`, 
        function(err, res, field){
            if(err){
                return 1
            }
            
            return 0
        });
}

module.exports = {
    getUserByUsernameEmail, create,
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

