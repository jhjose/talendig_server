const userModel = require('../model/User');

const getUserByUsernameEmail = (username, email)=>{
    const user = userModel.getUserByUsernameEmail(username, email);

    return user;
}

const createUser = (data)=>{
    const new_user = userModel.create(data);

    if(new_user){

    }
    console.log('new_user', new_user)
}

module.exports = {
    getUserByUsernameEmail, createUser,
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


    