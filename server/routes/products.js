var express = require('express');
const productController = require('../controller/ProductController');

let router = express.Router();


const user_role = 'development';

/* GET users listing. */
router.get('/last', function(req, res) {
  try{
    const productCTLR = new productController;
    
    return productCTLR.getLastProducts(req, res);
  }catch(e){
    console.log('e',e)
    return res.status(500).json({
      'error': true,
      'message': user_role === 'development' ? e : 'Ha ocurrido un error.'
    });
  }
});

module.exports = router;
