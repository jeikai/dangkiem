import jwt from "jsonwebtoken"
require("dotenv").config()

let key = process.env.JWT_SECRET
const createJWT = () => {
    let payload = { foo: 'bar'};
    let token = null;
    try {
        token = jwt.sign( payload, key)
        console.log(token)
    } catch(e) {
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
    return data;
}
module.exports = {
    createJWT,
    verifyToken
}