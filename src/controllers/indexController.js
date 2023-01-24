const path = require ("path");
const fs = require ("fs");
const { prependListener } = require("process");

const productsFilePath = path.join(__dirname, '../database/products.json');
const productosLeidos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const indexController = {
    index: (req, res)=>{
        const productosLeidos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        const ultimoAgregado = productosLeidos[productosLeidos.length - 1];
        const ultimosAgregados = productosLeidos.slice(productosLeidos.length -4);
        const loMasVendido = productosLeidos.filter(producto=> producto.isTopSeller == true);
        const algunasOfertas = productosLeidos.filter(producto=> producto.offer == true);
        
        res.render("index", {
            ultimoAgregado:ultimoAgregado,
            ultimosAgregados:ultimosAgregados,
            loMasVendido : loMasVendido,
            algunasOfertas : algunasOfertas
        })
    }
}

module.exports = indexController;
