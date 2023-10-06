const { Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORY_TABLE = 'categorys';

const CategorySchema = {

}

class Category extends Model {
    static associate(models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {
    CATEGORY_TABLE, 
    CategorySchema,
    Category
}