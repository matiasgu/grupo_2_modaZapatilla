const { update } = require('../../controllers/productsController');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types')DataTypes.} dataTypes
 */
module.exports = (sequelize, DataTypes) => {
    let alias = "User";  // esto debería estar en singular
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false, // no permite null
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: null,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2
        } 
    };
    let config = {
        tableName : "users",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true // borrado suave
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
    User.hasMany(models.CompraCarrito, {
        as: "compracarrito",
        foreingKey: "user_id",
        otherKey: 'shopcart_id',
        timestamps: false
        })
    }  


    // Aquí podrías definir asociaciones si existen
    // Por ejemplo, si un usuario puede tener muchas órdenes:
    // User.associate = (models) => {
    //     User.hasMany(models.Order, {
    //         as: "orders",
    //         foreignKey: "user_id"
    //     });
    // }


    return User;
};