module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderProduct';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER(),
            allowNull: false        
        },
        value: {
            type: dataTypes.FLOAT,
            allowNull: false        
        },
        subTotal: {
            type: dataTypes.FLOAT,
            allowNull: false        
        },
        order_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
       
    };
    let config = {
        tableName:'Orders_Products',
        timestamps: true,
        paranoid:   true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        deletedAt: 'delete_time'
    }
    const ProductConsole = sequelize.define(alias, cols, config); 

    ProductConsole.associate = function (models) {


        ProductConsole.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id"
        })

        ProductConsole.belongsTo(models.Order, {
            as: "order",
            foreignKey: "order_id"
        })
       

   }
 
    return ProductConsole
};