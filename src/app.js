const express = require("express");
const app = express();
const path = require("path");
const indexRoute = require ("./routes/indexRoute");
const loginRoute = require ("./routes/loginRoute");
const productCartRoute = require ("./routes/productCartRoute");
const productDetailRoute = require ("./routes/productDetailRoute");
const registerRoute = require ("./routes/registerRoute");

app.use(express.static(path.join(__dirname, "../public"))); /* arreglando static */
app.set("view engine", "ejs");


/* HOME */
app.use(indexRoute);
app.use(loginRoute);
app.use(productCartRoute);
app.use(productDetailRoute);
app.use(registerRoute);

/* Necesitamos agregar app.listen method para probar en local */
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));