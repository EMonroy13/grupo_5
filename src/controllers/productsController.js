const path = require ("path");
const fs = require ("fs")
// constante para leer el json
const productsFilePath = path.join(__dirname, "../database/products.json")
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")) 

const productsController = {
    
    allProducts: (req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		
        res.render("allproducts", {productos: products})
       
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
        res.render("productDetail", {
            producto: productoFiltrado,
            productoRelacionado : productoRelacionado})
    },
    
    create: (req, res)=>{
        res.render("productCreate");
    },

    processCreate:(req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        /* crear validación para products.length si esta vacio */

        let newProduct = {
            id : products[products.length - 1].id + 1,
            productName : req.body.productName,
            description : req.body.description,
            image : req.file ? req.file.fileName : 'default-placeholder.png' ,
            category : req.body.category,
            /* isTopSeller : req.body.isTopSeller, */
            /* offer : req.body.offer, */
            /* discount : req.body.discount, */
            colors : req.body.colors,
            price : req.body.price
        };
        console.log(req.body);
        /* Necesitamos pushear el nuevo producto */
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/');
    },
    
   
    edit:(req, res)=>{
            res.render("productEdit")
        },

    cart: (req, res)=>{
            res.render("productCart")
        }
}

module.exports = productsController;