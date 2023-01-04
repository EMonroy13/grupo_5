const path = require ("path");
const productCartController = {
    cart: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/productCart"))
    }
}

module.exports = productCartController;