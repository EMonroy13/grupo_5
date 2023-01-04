const path = require ("path");
const productDetailController = {
    productDetail: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/productDetail"))
    }
}

module.exports = productDetailController;