// const path = require ("path");
// const fs = require ("fs")
// const usersFilePath = path.join(__dirname, "../database/users.json");

//  function userLog (req, res, next) {
//     const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

//     req.session.email = req.body.email 
//     req.session.password = req.body.password

//     let email = req.session.email ; 
//     let password = req.session.password;



//  let buscarEmail = users.find(usuario => {
//     usuario.email = email
// }); 

// let check = bcrypt.compareSync(password, buscarEmail.password)
// if(buscarEmail==email && check){
//     next();
// } else {
//     res.redirect("user/login")
// }




    
    
//    } 

//    module.exports = userLog ; 