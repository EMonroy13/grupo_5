const path = require ("path");
const fs = require ("fs");
const { prependListener } = require("process");
const session = require("express-session");
const db = require('../database/models');

const indexController = {
    index: (req, res)=>{
        db.Product.findAll().then(num=>{
           
           //IMPORTANTE
            //agregar el include para poder hacer las relaciones en el ejs y manejar toda la dinamica de filtros en el ejs
          
            res.render("index", {
                productos:num,   
            })
         }).catch((error)=>{
                res.send(error);
            })

        }      
    
}

module.exports = indexController;
