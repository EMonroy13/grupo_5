module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
        firstName:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        } ,
        email:{
            type: DataTypes.STRING
        } ,
        password: {
            type: DataTypes.STRING
        },
        imageProfile:{
            type: DataTypes.STRING
        },
        id_categoria:{
            type: DataTypes.INTEGER,
            foreignKey: true
        }
      
    },{
        tableName:"users",
        timestamps: false
    });
    User.associate = function(models){
        User.hasMany(models.UserCategorie,{
            as: "UserCategorie",
            foreignKey: "id_categoria"
            })
            
    }
    return User;
}
