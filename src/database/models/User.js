module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        names: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        surnames: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(200),
            unique:true,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        role_id:  {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },

    };
    let config = {
        timestamps: true,
        paranoid:   true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        deletedAt: 'delete_time'
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function(models) {
       
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id"
        })

        User.hasMany(models.Order, {
            as: "order",
            foreignKey: "user_id"
        })
    }
 
    return User
};