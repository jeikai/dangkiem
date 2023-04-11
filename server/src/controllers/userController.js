import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) {
        return res.status(200).json({
            errCode: 1,
            message: "missing username or password"
        })
    }

    let userData = await userService.handleLogin(username, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData: userData.data ? userData.data : {}
    });
}


module.exports = {
    handleLogin: handleLogin,
  
}