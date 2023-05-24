import db from "../models/index";
import bcrypt from 'bcryptjs';
import { verifyToken } from "../middleware/JWTActions";
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
      verifyToken(data.token)
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

let createCar = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let car = await findCar(data.plateNumber);
      console.log('-------------------');
      console.log(car);
      console.log('-------------------');
      if (car) {
        resolve({
          errCode: 1,
          errMessage: "Plate number is already exist"
        })
      } else {
        await db.Car.create({
          driverId: data.driverId,
          plateNumber: data.plateNumber,
          manufacture: data.manufacture,
          model: data.model,
          color: data.color,
          registerDate: data.registerDate,
          registerCity: data.registerCity,
          purpose: data.purpose
        })

        resolve({
          errCode: 0,
          errMessage: "add car success"
        })
      }

    } catch (error) {
      reject(error)
    }
  })
}

let findCar = (pNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      let car = await db.Car.findOne({
        where: { plateNumber: pNumber },
      });
      resolve(car);
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
  createCar: createCar
};
