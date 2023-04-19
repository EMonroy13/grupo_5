const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

const indexRoute = require ("./routes/indexRoute");
const usersRoute = require ("./routes/usersRoute");
const productsRoute = require ("./routes/productsRoute"); 
const apiRoute = require("./routes/apiRoutes/apiRoute");


// const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware") // para sacar nav si esta logeado o no 

//middlewares
app.use(session({ // Para utilizar session
  secret: 'Grupo 5',
  resave: false,
  saveUninitialized: true,
}));
  

app.use(express.static(path.resolve(__dirname, "../public"))); /* arreglando static */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // para los archivos estaticos en la carpeta public 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // para capturar el body 
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE


app.use(userLoggedMiddleware);





/* HOME */
app.use('/',indexRoute);
/* Login */
app.use("/user", usersRoute);
/* Carrito de compras  */
app.use('/products', productsRoute);
/*apis*/
app.use("/api", apiRoute);



/* Necesitamos agregar app.listen method para probar en local */
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));