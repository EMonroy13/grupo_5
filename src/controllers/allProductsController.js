const path = require ("path");
const allProductsController = {
    allProducts: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/allproducts"))
    }
}

module.exports = allProductsController;