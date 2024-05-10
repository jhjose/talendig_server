const userModel = require('../model/User');
var CryptoJS = require("crypto-js"); 

const login = (req, res)=>{
    
    const user = getUserByEmail(req.body.email);

    let result = user.then(response => {
        console.log('req.body.email',req.body.email)
        console.log('response[0].email',response[0].email)

        const user_password = CryptoJS.AES.decrypt(response[0].password, '123456');
        const originalPassword = user_password.toString(CryptoJS.enc.Utf8);

        console.log('originalPassword', originalPassword)
    
        if(response[0].email === req.body.email && originalPassword === req.body.password){
            //res.cookie('user_auth', user.id);

            return res.status(200).json({
                'error': false,
                'authChecked': true,
                'message': 'Usted se ha autenticado correctamente.',
                'user': response[0],
            });
        }else{
            return res.status(200).json({
                'error': false,
                'authChecked': false,
                'message': 'Debe ingresar correctamente sus credenciales.'
            });
        }

    }).catch(err => {
        console.log('err',err)
    });
    
    return result;
}

const getUserByUsernameEmail = (username, email)=>{
    return userModel.getUserByUsernameEmail(username, email);
}

const getUserByEmail = (email, req)=>{
    return userModel.userByEmail(email, req);
}

const checkUserExistsByUsernameEmail = (username, email)=>{
    return userModel.checkIfUserExists(username, email);
}

const createUser = (data)=>{
    return userModel.create(data);
}

module.exports = {
    login, getUserByEmail, getUserByUsernameEmail, createUser, checkUserExistsByUsernameEmail,
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


    