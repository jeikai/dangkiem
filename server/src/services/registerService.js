import db from "../models/index";

const registerTime = 12; // 12 month

let handleRegister = async (plateNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      let car = await findCar(plateNumber);
      if (!car) {
        data.errCode = 1;
        data.errMessage = "plate number isn't exist";
        data.data = {};
        resolve(data);
      } else {
        let driver = await findDriver(car.driverId);
        if (!driver) {
          data.errCode = 2;
          data.errMessage = "can't find driver name";
          data.data = {};
          resolve(data);
        } else {
          data.errCode = 0;
          data.errMessage = "success";
          console.log(getRegisterDate(car.registerDate));
          data.data = {
            driverName: driver.driverName,
            plateNumber: car.plateNumber,
            registrationDate: getRegistrationDate(),
            expirationDate: getExpirationDate(),
            manufacture: car.manufacture,
            model: car.model,
            color: car.color,
            purpose: car.purpose,
            registerDate: getRegisterDate(car.registerDate),
          };
          resolve(data);
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

let createRegister = async (data) => {
  let plateNumber = data.plateNumber;
  let name = data.name;
  let registrationDate = data.registrationDate;
  let expirationDate = data.expirationDate;

  let car = await findCar(plateNumber);
  if (!car)
    return {
      errCode: 1,
      errMessage: "the plate number can't exist",
    };

  let user = await findUser(name);
  if (!user)
    return {
      errCode: 2,
      errMessage: "user can't exist",
    };

  return new Promise(async (resolve, reject) => {
    try {
      await db.Register.create({
        userId: user.id,
        carId: car.id,
        registerDate: data.registrationDate,
        expireDate: data.expirationDate,
      });
      console.log(data.registrationDate);
      resolve("create register success");
    } catch (error) {
      reject(error);
    }
  });
};

let getRegisterDate = (date) => {
  let year = date.getFullYear();
  let month = "";
  let day = "";
  if (date.getMonth() < 10) month = "0" + date.getMonth();
  else month = date.getMonth();
  if (date.getDate() < 10) day = "0" + date.getDate();
  else day = date.getDate();
  return `${year}-${month}-${day}`;
};

let getRegistrationDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = "";
  let day = "";
  if (date.getMonth() < 10) month = "0" + date.getMonth();
  else month = date.getMonth();
  if (date.getDate() < 10) day = "0" + date.getDate();
  else day = date.getDate();
  return `${year}-${month}-${day}`;
};

let getExpirationDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = "";
  let day = "";
  year += 1;
  if (date.getMonth() < 10) month = "0" + date.getMonth();
  else month = date.getMonth();
  if (date.getDate() < 10) day = "0" + date.getDate();
  else day = date.getDate();
  return `${year}-${month}-${day}`;
};

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

let findDriver = (driverId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let driver = await db.Driver.findOne({
        where: { id: driverId },
      });
      resolve(driver);
    } catch (error) {
      reject(error);
    }
  });
};

let findUser = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { name: name },
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetRegister = async (userId) => {
  let data = await getRegisterData(userId);
  if (!data)
    return {
      errCode: 1,
      errMessage: "can't get data from database",
      data: {},
    };

  return data;
};
let getRegisterData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let register = await db.Register.findAll({
        attributes: ["registerDate", "expireDate", "carId"],
        where: { userId: userId },
        raw: true,
        include: [
          {
            model: db.Car,
            as: "Car",
            attributes: ["plateNumber"],
          },
          {
            model: db.User,
            attributes: ["address"],
          },
        ],
      });
      resolve(register);
    } catch (error) {
      reject.log(error);
    }
  });
};
module.exports = {
  handleRegister: handleRegister,
  createRegister: createRegister,
  handleGetRegister: handleGetRegister,
};
