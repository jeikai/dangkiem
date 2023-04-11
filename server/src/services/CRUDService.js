import bcrypt from 'bcryptjs';
import db from '../models/index';



const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                name: data.name,
                username: data.username,
                password: data.password,
                rolebit: data.rolebit,
                address: data.address,
            });
            resolve('create new user success');
        } catch (error) {
            reject(error);
        }
    })
    // console.log(data);
    // console.log(hashPasswordFromBcrypt);
};

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
};

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users);
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    createUser: createUser,
    getAllUser: getAllUser,
};