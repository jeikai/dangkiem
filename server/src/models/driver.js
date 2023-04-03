'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Driver extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Driver.init({
        driverName: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Driver',
    });
    return Driver;
};