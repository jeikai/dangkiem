import db from "../models/index";

let handleStats = async (userId) => {
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
            attributes: ["plateNumber"]
          },
          {
            model: db.User,
            attributes: ["address"]
          }
        ],
      });
      let data = []
      register.map((register) => {
        data.push({
          plateNumber: register["Car.plateNumber"],
          address: register["User.address"],
          carId: register.carId,
          id: register.id,
          registerDate: register.registerDate,
          expireDate: register.expireDate
        })
      })
      resolve(data);
    } catch (error) {
      reject.log(error);
    }
  });
};

module.exports = {
  handleStats: handleStats,
};
