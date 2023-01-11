module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.FLOAT(),
            allowNull: false
        },
        user_id: {
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
    const Order = sequelize.define(alias, cols, config); 

    Order.associate = function (models) {


        Order.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        })
       
        Order.hasMany(models.OrderProduct, {
            as: "order_product",
            foreignKey: "order_id"
        })

   
   }
 
    return Order
};