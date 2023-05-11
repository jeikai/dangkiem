import registerService from "../services/registerService";

let createRegister = async (req, res) => {

    console.log(req.body);
    let data = await registerService.createRegister(req.body);
    return data;

}

let deleteRegister = async (req, res) => {
    let data = await registerService.deleteRegister(req.params.id);
    return res.status(200).json(data)
}
let handleGetRegister = async (req, res) => {
    let userId = req.params.id;
    let data = await registerService.handleGetRegister(userId);

    return res.status(200).json({
        errCode: 0,
        errMessage: "get data success",
        data: data
    })
}
let handleGetRegisterCucDangKiem = async (req, res) => {
    let data = await registerService.handleGetRegisterCucDangKiem()
    return res.status(200).json({
        errCode: 0, 
        errMessage: "get data success",
        data: data
    })
}
module.exports = {
    createRegister: createRegister,
    handleGetRegister: handleGetRegister,
    handleGetRegisterCucDangKiem: handleGetRegisterCucDangKiem,
    deleteRegister: deleteRegister
}
