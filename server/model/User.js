const db = require('../controller/DatabaseController');

const getUserByUsernameEmail = async (username, email)=>{
    try{

        db.connect();

        console.log(db.query)

        const user_exists = db.query(`SELECT * FROM users WHERE username="${username}" OR email="${email}" LIMIT 1;`, function(err, res, field){
            if(err){
              throw err;
            }
          
            console.log('The solution is: ', res[0])

            return res[0];
            // console.log('fields: ', fields)
        });
        
    }catch(e){
        console.log('e', e)
    }
}

module.exports = {
    getUserByUsernameEmail,
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

