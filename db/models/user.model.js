const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
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