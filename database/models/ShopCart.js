module.exports = (sequelize, dataTypes) => {
    let alias = "CompraCarrito";
    let cols = {
        shopcar_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 	
        shopcar_date: {
            type: dataTypes.DATE
        },
        shopcar_total: {
            type: dataTypes.FLOAT
        }
    };
    let config = {
        tableName : "shopcarts",
        timestamps : false

    }
    CompraCarrito.associate = (models) => {
        CompraCarrito.belongsToMay(models.Producto, {
            as: "producto",
            through: 'CartsProducts',
            foreingKey: "shopCart_id",
            otherKey: 'product_id',
            timestamps: false
        })
    }   
    const CompraCarrito = sequelize.define(alias, cols, config);
    return CompraCarrito;
}