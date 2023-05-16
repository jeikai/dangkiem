import db from "../models/index";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let handleUser = async (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      let user = await db.User.findOne({
        where: {
          username: username,
          rolebit: 0,
        },
      });
      if (user) {
        data.errCode = 1;
      } else {
        data.errCode = 0;
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

let createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      console.log(hashPasswordFromBcrypt);
      await db.User.create({
        name: data.name,
        username: data.username,
        password: hashPasswordFromBcrypt,
        rolebit: data.rolebit,
        address: data.address,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  console.log("toi o day");
  return new Promise(async (resolve, reject) => {
    try {
      console.log("ma hoa mat khau");
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  })
};

let createRegisterForm = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Register.create({
        userId: data.userId,
        carId: data.carId,
        registerDate: data.registerDate,
        expireDate: data.expireDate,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createRegisterForm: createRegisterForm,
  createUser: createUser,
  handleUser: handleUser,
};
