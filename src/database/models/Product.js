module.exports = (sequelize, dataTypes) => {
let alias = "Productos";
let cols = {
    product_id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }, 	
    product_name: {
        type: dataTypes.STRING
    },
    product_brand: {
        type: dataTypes.STRING
    },
    product_detail: {
        type: dataTypes.STRING
    },
    product_category: {
        type: dataTypes.STRING
    },
    product_price: {
        type: dataTypes.FLOAT
    },
    product_discount: {
        type: dataTypes.INTEGER
    },
    product_img: {
        type: dataTypes.STRING
    }
};
let config = {
    tableName : "products",
    timestamps : false

}
const Producto = sequelize.define(alias, cols, config);
Producto.associate = (models) => {
    Producto.belongsToMany(models.CompraCarrito, {
        as: "compracarrito",
        through: 'cartproducts',
        foreingKey: "product_id",
        otherKey: 'shopcart_id',
        timestamps: false
    })
}   
return Producto;
}