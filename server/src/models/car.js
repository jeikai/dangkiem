'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Car extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Car.init({
        driverId: DataTypes.INTEGER,
        plateNumber: DataTypes.STRING,
        manufacture: DataTypes.STRING,
        model: DataTypes.STRING,
        color: DataTypes.STRING,
        registerDate: DataTypes.DATE,
        registerCity: DataTypes.STRING,
        purpose: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Car',
    });
    return Car;
};