const { update } = require('../../controllers/productsController');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types')DataTypes.} dataTypes
 */
module.exports = (sequelize, DataTypes) => {
    let alias = "User";  // esto debería estar en singular
    let cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        user_lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        user_password: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        user_adress: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,//por defecto null
        },
        user_category: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        user_image: {
            type: DataTypes.STRING(30),
            allowNull: true,
            defaultValue: null,
        }
    };
    let config = {
        
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }
    
    const User = sequelize.define(alias, cols, config);

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