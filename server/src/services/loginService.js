import db from "../models/index";
import bcrypt from "bcryptjs";

let handleLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUsername(username);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ["id", "name", "username", "password", "rolebit"],
                    where: { username: username },
                    raw: true
                });
                if (user) {
                    comparePassword(password);
                    // let check = await bcrypt.compareSync(password, user.password);
                    let check = (password === user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "login success";
                        delete user.password;
                        userData.data = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "Wrong password";
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = "username isn't exist";
                }
            } else {
                userData.errCode = 2;
                userData.errMessage = "username isn't exist";
            }

            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

let comparePassword = (password) => {
    return new Promise((resolve, reject) => {
        try {

        } catch (error) {
            reject(error);
        }
    })
}
let checkUsername = (uname) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { username: uname }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    })
}


module.exports = {
    handleLogin: handleLogin,
}