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
 
let createRegisterForm = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Register.create({
                userId: data.userId,
                carId: data.carId,
                registerDate: data.registerDate,
                expireDate: data.expireDate
            });
        } catch (error) {
            reject(error);
        }
    })
};



module.exports = {
    createRegisterForm: createRegisterForm,
    createUser: createUser
};