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
    const CompraCarrito = sequelize.define(alias, cols, config);
    CompraCarrito.associate = (models) => {
        CompraCarrito.belongsToMany(models.Productos, {
            as: "producto",
            through: 'cartproducts',
            foreingKey: "shopcart_id",
            otherKey: 'product_id',
            timestamps: false
        })
    }   
    return CompraCarrito;
}