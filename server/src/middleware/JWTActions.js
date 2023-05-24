import jwt from "jsonwebtoken"
require("dotenv").config()

let key = "jeikai"
const createJWT = (data) => {
    let payload = data;
    let token = null;
    try {
        token = jwt.sign(payload, key, { expiresIn: '10h' })
        console.log(token)
    } catch (e) {
        console.log(e)
    }
    return token;
}

const verifyToken = (token) => {
    let data = null;
    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (e) {
        console.log(e)
    }
    console.log(data)
    return data;
}
module.exports = {
    createJWT,
    verifyToken
}