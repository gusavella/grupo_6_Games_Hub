module.exports = (sequelize, dataTypes) => {
    let alias = 'Section';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

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
    const Section = sequelize.define(alias, cols, config); 

    Section.associate = function(models) {
       
        Section.hasMany(models.Product, {
            as: "products",
            foreignKey: "section_id"
        })
    }
 
    return Section
};