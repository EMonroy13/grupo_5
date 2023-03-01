module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
        name:{
            type: DataTypes.VARCHAR(255)
        },
        description:{
            type: DataTypes.VARCHAR(255)
        } ,
        image:{
            type: DataTypes.VARCHAR(255)
        } ,
        price: {
            type: DataTypes.DOUBLE
        },
        top_seller:{
            type: DataTypes.BINARY
        },
        offer: {
            type: DataTypes.BINARY
        },
        discount:{
            type: DataTypes.DOUBLE
        },
        id_product_categoria:{
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        id_product_color:{
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    },{
        tableName:"products",
        timestamps: false
    });
    Product.associate = function(models){
        Product.hasMany(models.Category,{
            as: "Category",
            foreignKey: "id_product_categoria"
            }),
            Product.hasMany(models.Color,{
                as: "Color",
                foreignKey: "id_product_color"
                })
    }
    return Product;
}