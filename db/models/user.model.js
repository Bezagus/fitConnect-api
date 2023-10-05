const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {

};

class User extends Model {
    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
        }
    }
};

module.exports = {
    USER_TABLE,
    UserSchema,
    User
}