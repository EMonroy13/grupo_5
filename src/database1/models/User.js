module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
        firstName:{
            type: DataTypes.VARCHAR(255)
        },
        lastName:{
            type: DataTypes.VARCHAR(255)
        } ,
        email:{
            type: DataTypes.VARCHAR(255)
        } ,
        password: {
            type: DataTypes.VARCHAR(255)
        },
        imageProfile:{
            type: DataTypes.VARCHAR(255)
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
