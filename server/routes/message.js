var express = require('express'); 
var router = express.Router();
const messageController = require('../controller/MessageController');

/* GET messages listing. */
router.get('/list', async function(_req, res) {
  try{
    const messages = await messageController.get(_req, res);

    res.status(200).json({
      'error': false,
      'msgRequest': 'Lista de todos los mensajes',
      'message': messages
    });
  }catch(e){
    return res.status(500).json({
      'error': true,
      'msgRequest': e
    });
  }
});

router.get('/find/:id', async function(_req, res) {
  try{
    const message = await messageController.getById(_req, res);

    res.status(200).json({
      'error': false,
      'msgRequest': 'Mensaje encontrado.',
      'message': message
    });
  }catch(e){
    console.log('e', e)
    return res.status(500).json({
      'error': true,
      'message': e
    });
  }
});

router.post('/create', async function(req, res){
  try{
   const new_message = await messageController.create(req.body);

   res.status(200).json({
    'error': false,
    'msgRequest': 'Mensaje enviado correctamente.',
    'message': new_message
   });

  }catch(e){
    console.log('e', e)
    return res.status(500).json({
      'error': true,
      'message': e
    });
  }
  
});

router.post('/update/:id', async function(req, res){
  try{
   const updated_message = await messageController.update(req.params.id, req.body);

   res.status(200).json({
    'error': false,
    'msgRequest': 'Mensaje actualizado correctamente.',
    'message': updated_message
   });

  }catch(e){
    console.log('e', e)
    return res.status(500).json({
      'error': true,
      'message': e
    });
  }
  
});

router.post('/delete/:id', async function(req, res){
  try{
   const message_deleted = await messageController.destroy(req.params.id);

   res.status(200).json({
    'error': false,
    'msgRequest': `Message has been eliminated with ID ${message_deleted}`,
    'message': message_deleted
   });

  }catch(e){
    console.log('e', e)
    return res.status(500).json({
      'error': true,
      'message': e
    });
  }
  
});


module.exports = router;
