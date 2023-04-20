import registerService from "../services/registerService";

let createRegister = (req, res) => {
    
    // console.log(`${plateNumber} ${userName} ${registrationDate} ${expirationDate}`);
    registerService.createRegister(req.body);

}

module.exports = {
    createRegister: createRegister,
};