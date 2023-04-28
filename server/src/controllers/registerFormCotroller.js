import registerService from "../services/registerService";

let createRegister = (req, res) => {
    
    // console.log(`${plateNumber} ${userName} ${registrationDate} ${expirationDate}`);
    registerService.createRegister(req.body);

}
let handleRegis = (req, res) => {
    
}
module.exports = {
    createRegister: createRegister,
};