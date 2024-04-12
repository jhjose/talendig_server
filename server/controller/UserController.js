const userModel = require('../model/User');

const getUserByUsernameEmail = async (username, email)=>{
    const user = await userModel.getUserByUsernameEmail(username, email);
    console.log('user', user)
    /*
        user.then((err, res, field)=>{
            if(err){
                throw err;
            }
            
            console.log('The solution is: ', res[0])
        });

    return user;
    */
}

const create = async (req = request, res = response)=>{
    
}

module.exports = {
    getUserByUsernameEmail,
}

/*
talendig_server >
    server >
        model
        views
        controller
        

talendig_server > 
    server >
        app >
            http > 
                controller
                middleware
                request
                repositories
            model
*/


    