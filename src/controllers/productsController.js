const path = require ("path");
const fs = require ("fs")
const db = require('../database/models/index');
const { Console } = require("console");
const sequelize = db.sequelize;


// constante para leer el json
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")) 


const productsController = {
    
    allProducts: (req, res)=>{
        
        db.Product.findAll().then(num=>{
       
		res.render("allproducts", {productos : num})  
        }).catch((error)=>{
            res.send(error);
        })
    },
    category: (req,res)=>{

        db.Product.findAll({where:{id_product_categoria : req.params.id}}).then(num=>{
       
            res.render("productCategory", {productos : num})  
            }).catch((error)=>{
                res.send(error);
            })
    },
    
    productDetail: (req, res)=>{
        
        db.Product.findOne({where:{id:req.params.id}}).then(producto=>{
            return producto
         }).then(producto=>{
            let cat = producto.id_product_categoria
             db.Product.findAll({where:{id_product_categoria : cat}}).then(relacionado=>{ //Anidando then para los productos relacionados
                return relacionado
                }).then(relacionados=>{
                    res.render("productDetail", {producto: producto,productoRelacionado:relacionados})
                }).catch((error)=>{
            res.send(error);
            }) 
        })
     
        // PRODUCTOS RELACIONADOS  PROMISEALL--------------------------------------------
		/* let productoDetalle =  db.Product.findOne({where:{id:req.params.id}})

         let productoRelacionado = db.Product.findAll()
        Promise.all([ productoDetalle, productoRelacionado]).then(( productoDetalle, productoRelacionado)=>{
            console.log(productoRelacionado)
            res.render("productDetail", {producto: productoDetalle,
                productoRelacionado:productoRelacionado})
        })      */
        
    },
    
    create: (req, res)=>{
    
        res.render("productCreate");
    },

    processCreate:(req,res)=>{

        /* crear validación para products.length si esta vacio */
        db.Product.create ({
            name : req.body.productName,
            description : req.body.description,
            image : req.file ? req.file.filename : 'default-placeholder.png' ,
            price : req.body.price,
            top_seller : 1,
            offer : req.body.offer,
            discount : req.body.discount,
            id_product_categoria : req.body.category,
            id_product_color : req.body.colors,
            
        });
        /* Necesitamos pushear el nuevo producto */
        res.redirect("/products/allProducts");
    },
    
   
    edit:(req, res)=>{
        db.Product.findOne({where:{id:req.params.id}}).then(producto=>{
		res.render("productEdit",{productToEdit:producto });
        })
    },
    processEdit:(req, res) => {
		
	    db.Product.update({
            name : req.body.name,
            description : req.body.description,
            image : req.file ? req.file.filename : 'default-placeholder.png' ,
            price : req.body.price,
            top_seller : "1",
            offer : req.body.offer,
            discount : req.body.discount,
            id_product_categoria : req.body.category,
            id_product_color : req.body.colors,
            },{where:{
            id: req.params.id
           }});
		
		res.redirect("/products/allProducts");
	},

// (delete) Delete - Eliminar un producto de la DB
destroy : (req, res) => {
    db.Product.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect("/products/allProducts")
},


    cart: (req, res)=>{
     
            res.render("productCart")
        }
}

module.exports = productsController;