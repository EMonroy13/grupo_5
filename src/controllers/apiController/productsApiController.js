const db = require('../../database/models/index');
const sequelize = db.sequelize;

const productsApiController = {
    allProducts: async function (req,res) {
       try{ 
        let productos = await db.Product.findAll({
            include: ["Category"]
        })
        let categorias = await db.Category.findAll({
            include: ["Product"]
        })
        
        let producto= productos.map((product)=>{
            const producto2 = {
                id: product.id,
                name: product.name,
                description: product.description,
                image: "http://localhost:3000/img/" + product.image,               
                categoria_desc: product.Category.categoria_desc,
                detail : "http://localhost:3000/products/productDetail/" + product.id
            }
            return producto2
        })

        let categoria = categorias.map((category)=>{
            const categoria2 ={
                desc : category.categoria_desc,
                total_productos : category.Product.length
            }
            return categoria2
        })

                let respuesta = {
                  meta: {
                    status: 200,
                    total: producto.length,
                    countCategory : categoria
                  },
                  data: producto,
                };
                res.json(respuesta);
              
        } catch (error) {
            res.send(error);
        }
    }
    ,
    productDetail:(req,res)=>{
        db.Product.findByPk(req.params.id,
            {
                include : ['Category', 'Color']
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
                    category: product.Category.categoria_desc,
                    color: product.Color.product_color_desc
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