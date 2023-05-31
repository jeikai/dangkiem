import registerService from "../services/registerService";

//Hàm xử lí đăng kiểm
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

//Hàm update đăng kiểm
let updateRegister = async (req, res) => {
    let id = req.params.id;
    let data = req.body.selectedRegis;
    let token = req.body.token;
    let results = await registerService.updateRegister(id, data, token);
    return res.status(200).json(results); 
}

//Hàm xoá đăng kiểm
let deleteRegister = async (req, res) => {
    let data = await registerService.deleteRegister(req.params.id);
    return res.status(200).json(data)
}

//Hàm lấy ra tất cả các bản ghi các xe đã đăng kiểm dành cho trang chủ của trung tâm đăng kiểm
let handleGetRegister = async (req, res) => {
    let userId = req.params.id;
    let data = await registerService.handleGetRegister(userId);

    return res.status(200).json({
        errCode: 0,
        errMessage: "get data success",
        data: data
    })
}
//Hàm lấy ra tất cả các bản ghi xe đăng kiểm theo từng trung tâm đăng kiểm dành cho trang chủ của cục đăng kiểm
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
}
