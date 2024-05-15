const {getLastProducts} = require('../model/Product');

class ProductController {
    getLastProducts(req, res){

        console.log('getLastProducts',getLastProducts)

        return getLastProducts().then(response => {
            console.log('response', response);

            return res.status(200).json({
                'error': false,
                'message': 'Lista de productos.',
                'products': response,
            })
        }).catch(err => {
            console.log('err', err)
        });
    }

    create(){

    }

    update(){

    }

    delete(){

    }
}

module.exports = ProductController;
