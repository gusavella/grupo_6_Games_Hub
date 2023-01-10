module.exports = (sequelize, dataTypes) => {
    let alias = 'Console';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        paranoid:   true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        deletedAt: 'delete_time'
    }
    const Console = sequelize.define(alias, cols, config); 

    Console.associate = function (models) {


        Console.belongsToMany(models.Product, {
            as: "products",
            through: "products_consoles",
            foreignKey: "console_id",
            otherKey: "product_id",
            timestamps: true
        })

        Console.hasMany(models.ProductConsole, {
            as: "consoles_products_consoles",
            foreignKey: "console_id"
        })
   }
 
    return Console
};