import loginService from "../services/loginService";
import registerService from "../services/registerService"

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
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
            userData: userData.data ? userData.data : {},
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

let handleRegister = async (req, res) => {
    let plateNumber = req.body.plateNumber;
    let data = await registerService.handleRegister(plateNumber);
    return res.status(200).json(data);
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
  
}