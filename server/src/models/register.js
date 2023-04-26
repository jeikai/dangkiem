"use strict";
const { sequelize } = require("../config/connectDB");
const { DataTypes } = require("sequelize");
const User = require("./user");
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Register extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     };
//     Register.init({
//         userId: DataTypes.INTEGER,
//         carId: DataTypes.INTEGER,
//         registerDate: DataTypes.DATE,
//         expireDate: DataTypes.DATE
//     }, {
//         sequelize,
//         modelName: 'Register',
//     });
//     return Register;
// };

const Register = sequelize.define("Register", {
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: "users",
			key: "id",
		},
	},
	carId: DataTypes.INTEGER,
	registerDate: DataTypes.DATE,
	expireDate: DataTypes.DATE,
});

sequelize.sync();

module.exports = Register;
