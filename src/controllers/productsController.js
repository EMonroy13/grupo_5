const path = require ("path");
const fs = require ("fs")
// constante para leer el json
const productsFilePath = path.join(__dirname, "../database/products.json")
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")) 

const productsController = {
    
    allProducts: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/allproducts"))
    },
   
    
    productDetail: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/productDetail"))},
    
    
    create: (req, res)=>{
            res.render(path.resolve(__dirname, "../views/productUpdate"))
        },
    
   
    edit:(req, res)=>{
            res.render(path.resolve(__dirname, "../views/productEdit"))
        },

    cart: (req, res)=>{
            res.render(path.resolve(__dirname, "../views/productCart"))
        }
}

module.exports = productsController;