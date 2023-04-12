import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body)
    if (!username || !password) {
        return res.status(200).json({
            errCode: 1,
            message: "missing username or password",
            status: false
        })
    }

    let userData = await userService.handleLogin(username, password);
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


module.exports = {
    handleLogin: handleLogin,

}