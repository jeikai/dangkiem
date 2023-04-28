'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Register extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Register.belongsTo(models.Car, {foreignKey: {unique: true}});
            Register.belongsTo(models.User, {foreignKey: {unique: true}});
        }
    };
    Register.init({
        userId: DataTypes.INTEGER,
        carId: DataTypes.INTEGER,
        registerDate: DataTypes.DATE,
        expireDate: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Register',
    });
    return Register;
};