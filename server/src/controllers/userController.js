import loginService from "../services/loginService";
import registerService from "../services/registerService"
import createDB from "../services/createDB"
import { createJWT, verifyToken } from '../middleware/JWTActions'

//Hàm login và tạo JWT
let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // console.log(req.body)
    if (!username || !password) {
        return res.status(200).json({
            errCode: 1,
            message: "missing username or password",
            status: false
        })
    }

    let userData = await loginService.handleLogin(username, password);

    if (userData.errCode == 0) {
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            userData: userData.data ? createJWT(userData.data) : {},
            status: true
        });
    } else {
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            status: false
        });
    }
}
// Check xem biển số xe có tồn tại hay không
let handleRegister = async (req, res) => {
    let plateNumber = req.body.plateNumber;
    let data = await registerService.handleRegister(plateNumber);
    return res.status(200).json(data);
}
let handleUser = async (req, res) => {
    let username = req.body.username;
    console.log(username)
    let data = await createDB.handleUser(username);
    return res.status(200).json(data);
}
//Đăng ký trung tâm đăng kiểm
let createUser = async (req, res) => {
    let dulieu = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        rolebit: req.body.rolebit,
        email: req.body.email,
        address: req.body.address,
        token: req.body.token
    }

    let data = await createDB.createUser(dulieu)
    return res.status(200).json({ data, status: true });
}
//Hàm verify token
let handleVerify = async (req, res) => {
    let data = req.body.data
    data = verifyToken(data)
    return res.status(200).json(data);
}
module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    createUser: createUser,
    handleUser: handleUser,
    handleVerify: handleVerify
}