const path = require ("path");
const productEditController = {
    update: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/productUpdate"))
    },
    edit:  (req, res)=>{
        res.render(path.resolve(__dirname, "../views/productEdit"))
    }
}

module.exports = productEditController;