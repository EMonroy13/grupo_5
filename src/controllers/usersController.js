const path = require ("path");
const fs = require ("fs")

const usersController = {
    login: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/login"))
    },
    register: (req, res)=>{
        res.render(path.resolve(__dirname, "../views/register"))
    }
}

module.exports = usersController;