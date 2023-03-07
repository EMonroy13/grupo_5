module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define("Color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        } ,
        product_color_desc:{
            type: DataTypes.STRING
        },
    },{
        tableName:"product_colors",
        timestamps: false
    });
    Color.associate = function(models){
        Color.belongsTo(models.Product,{
            as: "Product",
            foreignKey: "id_product_color"
            })
        }
    return Color;
}