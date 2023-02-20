// guardar usuario en la DB
// buscar al usuario que se quiere guardar por su email
// traer un usuario por su id
//editar la informacion de un usuario
// eliminar a un usuario de la DB

const path = require ("path");
const fs = require ("fs")
const usersFilePath = path.join(__dirname, "../database/users.json");

const User = {
 usersFilePath: path.join(__dirname, "../database/users.json"),
 
  getData: function () {
    return JSON.parse(fs.readFileSync(this.usersFilePath, "utf-8")); // trae todos los usuarios en formato js
  },

  FindAll: function () {
    return this.getData(); //es lo mismo que get data
  },

  findByPk: function (id) {
    let allUsers = this.FindAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  findByField: function (field, text) {
    let allUsers = this.FindAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },
  generateId : function(){
let allUsers = this.FindAll();
let lastUser = allUsers.pop();
return lastUser.id + 1 
  },

  create: function (userData) {
    let allUsers = this.FindAll()
    let newUser= {
        id: this.generateId(),
        ...userData
    }|
    allUsers.push(newUser);
    fs.writeFileSync(this.usersFilePath, JSON.stringify(allUsers, null, " "))
    return true;
  },
  delete: function(id){
let allUsers = this.FindAll();
let finalUsers =  allUsers.filter(oneUser => oneUser.id != id)
fs.writeFileSync(this.usersFilePath, JSON.stringify(finalUsers, null, " "))
  }
};
// console.log(User.findByPk(2));
module.exports = User; 