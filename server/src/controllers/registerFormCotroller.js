import registerService from "../services/registerService";

let createRegister = async (req, res) => {
    try {
        console.log(req.body);
        let data = await registerService.createRegister(req.body);
        return res.status(200).json({
            data: data,
            message: data.errMessage,
            errMessage: "Dang kiem thanh cong"
        });
    } catch (e) {
        return res.json({
            error: "Khong the dang kiem"
        })
    }

}

let updateRegister = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let results = await registerService.updateRegister(id, data);
    return res.status(200).json(results);
}

let updateDriver = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let results = await registerService.updateDriver(id, data);
    return res.status(200).json(results);
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
    deleteRegister: deleteRegister,
    updateRegister: updateRegister,
    updateDriver: updateDriver
}
