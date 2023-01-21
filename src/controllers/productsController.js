const path = require ("path");
const fs = require ("fs")
// constante para leer el json
const productsFilePath = path.join(__dirname, "../database/products.json")
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")) 

const productsController = {
    
    allProducts: (req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		
        res.render(path.resolve(__dirname, "../views/allproducts"), {productos: products})
       
    },
   
    
    productDetail: (req, res)=>{
        
        let id = req.params.id;
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productoFiltrado = products.find(producto => {
			return producto.id == id
		})
        let productoRelacionado = products.filter(producto => {
			return producto.category == productoFiltrado.category
		}) 
        res.render(path.resolve(__dirname, "../views/productDetail"), {
            producto: productoFiltrado,
            productoRelacionado : productoRelacionado})
    },
    
    
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