const path = require ("path");
const fs = require ("fs");
const { prependListener } = require("process");
const session = require("express-session");
const db = require('../database/models');

const indexController = {
    index: (req, res)=>{
        const productosLeidos = db.Product.findAll().then(num=>{
            res.render("index", {
                productos:num,   
            })
         }).catch((error)=>{
                res.send(error);
            })

        },
    nosotros:(req, res) =>{
        res.render("nosotros")
        }   
    
}

module.exports = indexController;
