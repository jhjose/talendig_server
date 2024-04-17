var express = require('express'); 
var router = express.Router();
const messageController = require('../controller/MessageController');

/* GET messages listing. */
router.get('/list', async function(req, res) {
  try{
    const messages = await messageController.get(req, res);

    res.status(200).json(messages);
  }catch(e){
    return res.status(500).json({
      'error': true,
      'message': e
    });
  }
});

router.post('/create', function(req, res){
  try{
   

  }catch(e){
    return res.status(500).json({
      'error': true,
      'message': 'Ha ocurrido un error.'
    });
  }
  
});


module.exports = router;
