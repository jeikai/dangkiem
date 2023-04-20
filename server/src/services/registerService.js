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
                    // data.car = car;
                    data.driver = driver;
                    data.data = {
                        driverName: driver.driverName,
                        plateNumber: car.plateNumber,
                        registerDate: getRegisterDate(),
                        expireDate: getExpireDate(),
                        manufacture: car.manufacture,
                        model: car.model,
                        color: car.color,
                        purpose: car.purpose
                    };
                    resolve(data);
                }

            }
        } catch (error) {
            reject(error);
        }
    })
}

let getRegisterDate = () => {
    let date = new Date();
    // let year = date.getFullYear;
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

let getExpireDate = () => {
    let date = new Date();
    let year = date.getFullYear;
    let month = date.getMonth();
    month += 12;
    if (month > 12) {
        month %= 12;
        year++;
    }
    return `${year}-${month}-${date.getDate()}`;
}

let findCar = (plateNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            let car = await db.Car.findOne({
                where: { plateNumber: plateNumber }
            })
            resolve(car);
        } catch (error) {
            reject(error);
        }
    })
}

let findDriver = (driverId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let driver = await db.Driver.findOne({
                where: { id: driverId }
            })
            resolve(driver);
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    handleRegister: handleRegister,
}