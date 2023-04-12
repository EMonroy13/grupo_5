const db = require('../../database/models/index');
const sequelize = db.sequelize;

const productsApiController = {
    allProducts: (req,res)=>{
        db.Product.findAll({
            include: ["Category"]
        }).then(product=>{
                let respuesta = {
                    meta: {
                        status : 200,
                        total: product.length,
                        /* countCategory:  */
                    },
                    data: product
                }
                    res.json(respuesta);
               }).catch((error)=>{
                res.send(error);
            })
    }
    ,
    productDetail:(req,res)=>{
        
    }
}

module.exports = productsApiController;