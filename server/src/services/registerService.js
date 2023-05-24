import db from "../models/index";
import { verifyToken } from '../middleware/JWTActions'
const registerTime = 12; // 12 month

let handleRegister = async (plateNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      console.log(plateNumber);
      let car = await findCar(plateNumber);
      if (!car) {
        data.errCode = 1;
        data.errMessage = "Biển số xe không tồn tại";
        data.data = {};
        resolve(data);
      } else {
        let driver = await findDriver(car.driverId);
        if (!driver) {
          data.errCode = 2;
          data.errMessage = "Biển số xe không tồn tại";
          data.data = {};
          resolve(data);
        } else {
          data.errCode = 0;
          data.errMessage = "Điền đơn thành công";
          // console.log(getRegisterDate(car.registerDate));
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
  let id = data.id;
  let registrationDate = data.registrationDate;
  let expirationDate = data.expirationDate;
  let token = data.token;
  verifyToken(token)
  let car = await findCar(plateNumber);
  if (!car)
    return {
      errCode: 1,
      errMessage: "Biển số xe không tồn tại",
    };

  return new Promise(async (resolve, reject) => {
    try {
      await db.Register.create({
        userId: data.id,
        carId: car.id,
        registerDate: registrationDate,
        expireDate: expirationDate,
      });
      // console.log(data.registrationDate);
      resolve({
        errCode: 0,
        errMessage: "Create register success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

let deleteRegister = async (id) => {
  let register = await db.Register.findOne({
    where: { id: id },
  });
  if (!register)
    return {
      errCode: 1,
      errMessage: "register id doesn't exist",
    };
  return new Promise(async (resolve, reject) => {
    try {
      await db.Register.destroy({
        where: { id: id },
      });

      resolve({
        errCode: 0,
        errMessage: `deleted register have id : ${id}`,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let updateRegister = (id, data, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let register = await findRegister(id);
      let driver = await findDriver(data.carId);
      verifyToken(token)
      if (!register || !driver) {
        resolve({
          errCode: 1,
          errMessage: "Đăng kiểm hoặc chủ sở hữu không tồn tại"
        })
      } else {
        await db.Register.update(
          { registerDate: data.registerDate, expireDate: data.expireDate },
          { where: { id: id } }
        )

        await db.Driver.update(
          { driverName: data.driverName, phoneNumber: data.phoneNumber },
          { where: { id: data.carId } }
        )
        resolve({
          errCode: 0,
          errMessage: "Cập nhập thành công"
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

let findRegister = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let register = await db.Register.findOne({
        where: { id: id }
      })
      resolve(register)
    } catch (error) {
      reject(error)
    }
  })
}

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
  let hour = "";
  if (date.getMonth() < 10) month = "0" + (date.getMonth() + 1);
  else month = date.getMonth() + 1;
  if (date.getDate() < 10) day = "0" + date.getDate();
  else day = date.getDate();
  if (date.getHours() < 10) hour = "0" + date.getHours();
  return `${year}-${month}-${day}`;
};

let getExpirationDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = "";
  let day = "";
  year += 1;
  if (date.getMonth() < 10) month = "0" + (date.getMonth() + 1);
  else month = date.getMonth() + 1;
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

let findUser = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { username: username },
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
        attributes: ["registerDate", "expireDate", "carId", "id"],
        where: { userId: userId },
        raw: true,
        include: [
          {
            model: db.Car,
            as: "Car",
            attributes: ["plateNumber"],
            include: [
              {
                model: db.Driver,
                attributes: ["driverName", "phoneNumber"],
              },
            ],
          },
        ],
      });
      let data = [];
      register.map((register) => {
        data.push({
          plateNumber: register["Car.plateNumber"],
          carId: register.carId,
          id: register.id,
          registerDate: register.registerDate,
          expireDate: register.expireDate,
          driverName: register["Car.Driver.driverName"],
          phoneNumber: register["Car.Driver.phoneNumber"],
        });
      });
      resolve(data);
    } catch (error) {
      reject.log(error);
    }
  });
};
let handleGetRegisterCucDangKiem = async () => {
  let data1 = await getRegisterDataCucDangKiem();
  let data2 = await getTrungTamDangKiem();
  let data3 = [];
  for (let i = 0; i < data2.length; i++) {
    let data = [];
    data.push(data2[i]);
    for (let j = 0; j < data1.length; j++) {
      if (data2[i].id == data1[j].userId) {
        data.push(data1[j]);
      }
    }
    data3.push(data);
  }
  if (!data3)
    return {
      errCode: 1,
      errMessage: "can't get data from database",
      data: {},
    };
  console.log(data3)
  return data3;
};
let getTrungTamDangKiem = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll({
        attributes: ["id", "name"],
        where: { rolebit: 0 },
        raw: true,
      });
      resolve(data);
    } catch (error) {
      reject.log(error);
    }
  });
};
let getRegisterDataCucDangKiem = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let register = await db.Register.findAll({
        attributes: ["registerDate", "expireDate", "carId", "userId"],
        raw: true,
        include: [
          {
            model: db.Car,
            as: "Car",
            attributes: ["plateNumber"],
            include: [
              {
                model: db.Driver,
                attributes: ["driverName", "phoneNumber"],
              },
            ],
          },
          {
            model: db.User,
            attributes: ["id"]
          }
        ],
      });
      let data = [];
      register.map((register) => {
        data.push({
          address: register["User.address"],
          name: register["User.name"],
          carId: register.carId,
          userId: register.userId,
          registerDate: register.registerDate,
          expireDate: register.expireDate,
          plateNumber: register["Car.plateNumber"],
          driverName: register["Car.Driver.driverName"],
          phoneNumber: register["Car.Driver.phoneNumber"],
        })
      })
      resolve(data);
    } catch (error) {
      console.log(error);
    }
  });
};
module.exports = {
  handleRegister: handleRegister,
  createRegister: createRegister,
  handleGetRegister: handleGetRegister,
  handleGetRegisterCucDangKiem: handleGetRegisterCucDangKiem,
  deleteRegister: deleteRegister,
  updateRegister: updateRegister,
};
