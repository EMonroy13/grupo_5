const path = require ("path");
const loginController = {
    login: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/login"))
    }
}

module.exports = loginController;