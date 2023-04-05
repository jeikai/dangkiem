import db from '../models/index';

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
    })
};

let createDriver = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Driver.create({
                driverName: data.driverName,
                dateOfBirth: data.dateOfBirth,
                address: data.address,
                phoneNumber: data.phoneNumber
            });
        } catch (error) {
            reject(error);
        }
    })
};

// let createCar = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await db.Car.create({
//                 plateNumber: data.plateNumber,
//                 manufacture: data.manufacture,
//                 model: data.model,
//                 color: data.color,
//                 registerCity: data.registerCity,
//                 purpose: data.purpose
//             });
//         } catch (error) {
//             reject(error);
//         }
//     })
// };

let createDB = async () => {

    createUser({
        name: "Nguyen Van B",
        username: "NguyenB",
        password: "123",
        rolebit: "333",
        address: "tp.hcm"
    });
    createDriver({
        driverName: 'Nguyễn Thành Long',
        dateOfBirth: '1990-01-15',
        address: 'Số 5, đường Nguyễn Du, phường 7, quận 3, TP. HCM',
        phoneNumber: '0901111222'
    });

    // createCar({
    //     plateNumber: "ABC",
    //     manufacture: "abc",
    //     model: "abc",
    //     color: "abc",
    //     registerCity: "abc",
    //     purpose: "abc"
    // })
}

module.exports = {
    createDB: createDB,
};