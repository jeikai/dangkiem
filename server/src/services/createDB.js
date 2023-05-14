import db from "../models/index";

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
      await db.User.create({
        name: data.name,
        username: data.username,
        password: data.password,
        rolebit: data.rolebit,
        address: data.address,
      });
    } catch (error) {
      reject(error);
    }
  });
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
