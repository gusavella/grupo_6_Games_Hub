module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductConsole';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        console_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName:'Products_Consoles',
        timestamps: true,
        paranoid:   true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        deletedAt: 'delete_time'
    }
    const ProductConsole = sequelize.define(alias, cols, config); 

    ProductConsole.associate = function (models) {


        ProductConsole.belongsTo(models.Product, {
            as: "product_console_product_id",
            foreignKey: "product_id"
        })

        ProductConsole.belongsTo(models.Console, {
            as: "product_console_console_id",
            foreignKey: "console_id"
        })
       

   }
 
    return ProductConsole
};