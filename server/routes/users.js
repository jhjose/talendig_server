var express = require('express');
var router = express.Router();
const userController = require('../controller/UserController');

const user_role = 'development';

/* GET users listing. */
router.get('/', function(req, res, next) {

  // GET ALL COOKIES WITHOUT AUTH
  console.log('Cookies: ', req.cookies);

  // GET ALL COOKIES WITH AUTH
  console.log('Signed Cookies: ', req.signedCookies);

  // CREATE A COOKIE
  res.cookie('user_id', 56, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 4,
    secure: true
  });

  // GET A SPECIFIC COOKIE
  //req.cookies.user_id

  // DELETE A COOKIE
  //res.clearCookie('user_id', {httpOnly: true, secure: true});

  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
  try{
    //console.log('req.body', req.body)

    if(req.body.username && req.body.email && req.body.password && req.body.country){
      const data = {
        username: req.body?.username,
        email: req.body?.email,
        password: req.body?.password,
        country: req.body?.country,
        state: req.body?.state === 'on' ? 1 : 0,
      }

      const user = userController.getUserByUsernameEmail(data.username, data.email);
      
      console.log('user', user);
      //const password = cryptr.encrypt(req.body?.password);
      

/*
      const user_exists = connection.query(`SELECT * FROM users WHERE username="${username}" OR email="${email}" LIMIT 1;`, 
        function(error, results, fields){
          console.log('The solution is: ', results[0])
          console.log('results.length: ', results.length)

          if(!results.length){
            
            connection.query(`INSERT INTO users (username, email, password, country, status) VALUES ("${username}", "${email}", "${password}", "${country}", "${state}")`, 
              function(err, res, field){
                if(err){
                  throw err;
                }
              
                console.log('The solution is: ', res[0])
                // console.log('fields: ', fields)
              });
          }
          
      });

      */

    }

    // - numérico (tynyint, smallint, mediumint, int, bigint) = 52,416
    // - date = fecha
    // - datetime = fecha y hora
    // - timestamp = YYYY-MM-DD HH:MM:SS
    // - time = HH:MM:SS
    // - year = YYYY
    // - char = cadena longitud máxima 255. Siempre reservará espacio para la longitud definida aunque no se utilize
    // - varchar = cadena logitud máxima 255. No reserva el espacio de la longitud máxima definida
    // - float
    // - decimal = 52.69
    // - double


    return res.json({
      'error': false,
      'message': 'El usuario ha sido creado correctamente'
    });

  }catch(e){
    return res.status(500).json({
      'error': true,
      'message': user_role === 'development' ? e : 'Ha ocurrido un error.'
    });
  }
  
});

router.get('/list', function(req, res, next){
/*
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
*/
  //next();

  const users = {
    data_user_1: {
      name: 'Juan ',
      lastname: 'Perez',
    },
    data_user_2: {
      name: 'Junior',
      lastname: 'Acosta',
    },
    data_user_3: {
      name: 'Griselda',
      lastname: 'Blanco (La Viuda Negra)',
    },
  }

  return res.json(users);
});

module.exports = router;
