var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
  try{
    console.log('req.body', req.body)
    const user_role = 'development';

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
