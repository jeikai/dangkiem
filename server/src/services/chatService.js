import db from "../models/index";

let getCar = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Car.findAll();
      resolve(data);
    } catch (error) {
      reject.log(error);
    }
  });
};

let getData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Register.findAll({
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
      resolve(data);
    } catch (error) {
      reject.log(error);
    }
  });
};

module.exports = {
  getData: getData,
  getCar: getCar,
};
