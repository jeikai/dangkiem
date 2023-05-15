import bcrypt from 'bcryptjs';
import db from '../models/index';



const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("hello");
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            console.log(hashPasswordFromBcrypt);
            await db.User.create({
                name: data.name,
                username: data.username,
                password: hashPasswordFromBcrypt,
                rolebit: data.rolebit,
                address: data.address,
            });
            resolve('create new user success');
        } catch (error) {
            reject(error);
        }
    })
    console.log(data);

};

let hashUserPassword = (password) => {
    console.log("toi o day");
    return new Promise(async (resolve, reject) => {
        try {
            log("ma hoa mat khau")
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
            reject(error)
        }
    })
}

module.exports = {
    createUser: createUser,
    getAllUser: getAllUser,
};