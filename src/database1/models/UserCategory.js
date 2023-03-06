module.exports = (sequelize, DataTypes) => {
    const UserCategorie = sequelize.define("UserCategorie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
       categorie_desc:{
            type: DataTypes.VARCHAR(255)
        }
      
     },{
        tableName:"user_categories",
        timestamps: false
    });
    UserCategorie.associate = function(models){
        UserCategorie.BelongsTo(models.User,{
            as: "User",
            foreignKey: "id_categoria"
            })
            
    }
    return UserCategorie;
}