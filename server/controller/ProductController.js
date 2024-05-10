const {getLastProducts} = require('../model/Product');

class ProductController {
    getLastProducts(){

        console.log('getLastProducts',getLastProducts)

        return getLastProducts().then(response => {
            console.log('response', response);

            
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
