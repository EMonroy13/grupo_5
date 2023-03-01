module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
        categoria_desc:{
            type: DataTypes.VARCHAR(255)
        },
    },{
        tableName:"product_categories",
        timestamps: false
    });
    Category.associate = function(models){
        Category.belongsTo(models.Product,{
            as: "Product",
            foreignKey: "id_product_categoria"
            })
        }
    return Category;
}