const express = require("express");
const app = express();
const path = require("path");
const indexRoute = require ("./routes/indexRoute");
const loginRoute = require ("./routes/loginRoute");
const productCartRoute = require ("./routes/productCartRoute");
const productDetailRoute = require ("./routes/productDetailRoute");
const registerRoute = require ("./routes/registerRoute");
const productEditRoute = require ("./routes/productEditRoute")
const allProductsRoute = require ("./routes/allProductsRoute")
app.use(express.static(path.join(__dirname, "../public"))); /* arreglando static */
app.set("view engine", "ejs");


/* HOME */
app.use(indexRoute);
/* Login */
app.use(loginRoute);
/* Carrito de compras  */
app.use(productCartRoute);
/* Detalles del Producto */
app.use(productDetailRoute);
/* Register */
app.use(registerRoute);
/* edicion de productos */
app.use(productEditRoute);
/* Todos los Productos */
app.use(allProductsRoute);

/* Necesitamos agregar app.listen method para probar en local */
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));