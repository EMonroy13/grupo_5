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
            image : req.file ? req.file.filename : 'default-placeholder.png' ,
            category : req.body.category,
            isTopSeller : false,
            offer : req.body.offer,
            discount : req.body.discount,
            colors : req.body.colors,
            price : req.body.price
        };
        /* Necesitamos pushear el nuevo producto */
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/');
    },
    
   
    edit:(req, res)=>{
        let id = req.params.id;
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productoFiltrado = products.find(producto => producto.id == id)
		res.render("productEdit",{productToEdit:productoFiltrado});
        },
    processEdit:(req, res) => {
		
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let id = req.params.id;
		let productoAnterior = products.find(producto => {
			return producto.id == id
		})

		let productoEditado = {
			/* dejar el id anterior */
			id: productoAnterior.id,
			productName: req.body.name,
            description: req.body.description,
            image:req.file ? req.file.filename : productoAnterior.image,
            category: req.body.category,
            isTopSeller : false, 
            offer : req.body.offer, 
            discount : req.body.discount,
            colors:req.body.color,
			price: req.body.price,			
		}
     
		/* Modificar el array en la posición correspondiente */
		
		let indice = products.findIndex(product => {
			return product.id == id
		})

		products[indice] = productoEditado;

		/* Convertir a JSON */
		/* Escribir sobre el archivo json */
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products/allProducts");
	},

// (delete) Delete - Eliminar un producto de la DB
destroy : (req, res) => {
    // Do the magic
    let id = req.params.id;
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    let productosFiltrados = products.filter(producto => {
        return producto.id != id
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, " "));

    res.redirect("/products/allProducts");
},


    cart: (req, res)=>{
            res.render("productCart")
        }
}

module.exports = productsController;