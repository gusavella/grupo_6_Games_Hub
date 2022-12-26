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


        Console.belongsToMany(models.Game, {
            as: "games",
            through: "games_consoles",
            foreignKey: "consoles_id",
            otherKey: "games_id",
            timestamps: true
        })

   }
 
    return Console
};