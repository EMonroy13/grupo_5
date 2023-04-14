const db = require('../../database/models/index');
const sequelize = db.sequelize;

const productsApiController = {
    allProducts: (req,res)=>{
        db.Product.findAll({
            include: [Category]
        }).then(product=>{
                let respuesta = {
                    meta: {
                        status : 200,
                        total: product.length,
                        /* countCategory: */
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
        db.Product.findByPk(req.params.id,
            {
                include : ['Category']
            })
            .then(product=> {
                let producto = {
    id: product.id,
    name: product.name,
    description: product.description,
    image: "http://localhost:3000/img/" + product.image,
    price: product.price,
    top_seller: product.top_seller,
    offer: product.offer,
    discount: product.discount,
    id_product_categoria: product.id_product_categoria,
    id_product_color:product.id_product_color,
    Category: {
      id: product.Category.id,
      categoria_desc: product.Category.categoria_desc
                }
            }
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/product/:id'
                    },
                    data: producto
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsApiController;