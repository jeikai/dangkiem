"use strict";
const { sequelize } = require("../config/connectDB");
const { DataTypes } = require("sequelize");
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     rolebit: DataTypes.STRING,
//     address: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

const User = sequelize.define("User", {
	name: DataTypes.STRING,
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	rolebit: DataTypes.STRING,
	address: DataTypes.STRING,
});

sequelize.sync();

module.exports = User;
