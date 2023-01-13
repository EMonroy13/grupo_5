const path = require ("path");
const fs = require ("fs")
const indexController = {
    index: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/index"))
    }
}

module.exports = indexController;
