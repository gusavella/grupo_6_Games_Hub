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

    // Console.associate = function (models) {


    //     Console.belongsToMany(models.Movie, {
    //         as: "movies",
    //         through: "actor_movie",
    //         foreignKey: "actor_id",
    //         otherKey: "movie_id",
    //         timestamps: false
    //     })

   // }
 
    return Console
};