const path = require ("path");
const fs = require ("fs");
const { prependListener } = require("process");
const session = require("express-session");
const db = require('../database/models');

const indexController = {
    index: (req, res)=>{
        const productosLeidos = db.Product.findAll().then(num=>{
           
           //IMPORTANTE
            //agregar el include para poder hacer las relaciones en el ejs y manejar toda la dinamica de filtros en el ejs

         
           /*    const ultimoAgregado =num[productosLeidos.length - 1];
            console.log(ultimoAgregado)
            const ultimosAgregados = num.slice(productosLeidos.length -4);
            const loMasVendido = num.filter(producto=> producto.isTopSeller == 1);
            const algunasOfertas = num.filter(producto=> producto.offer == 1 || producto.offer == "1" ); */
            res.render("index", {
                productos:num,   
            })
         }).catch((error)=>{
                res.send(error);
            })

        }      
    
}

module.exports = indexController;
