module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        value: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        final_value: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        section_id: {
            type: dataTypes.INTEGER,
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
    const Game = sequelize.define(alias, cols, config); 

    Game.associate = function (models) {


        Game.belongsTo(models.Section, {
            as: "section",
            foreignKey: "section_id"
        }),
        Game.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })

        Game.belongsToMany(models.Console, {
            as: "consoles",
            through: "products_consoles",
            foreignKey: "product_id",
            otherKey: "console_id",
            timestamps: true
        })

   }
 
    return Game
};