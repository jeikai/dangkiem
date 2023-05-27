import fs from "fs"
import registerService from "../services/registerService"
import createDB from "../services/createDB"
import { log } from "console"

let handleUploadFile = (req, res) => {
    if (req.file.originalname.split('.').pop() !== "csv") {
        return res.status(200).json({
            errCode: 1,
            errMessage: "File không đúng định dạng csv"
        })
    }
    let path = req.file.path;
    // console.log(path);

    let ok = true;
    let template = [
        'driverId',
        'plateNumber',
        'manufacture',
        'model',
        'color',
        'registerDate',
        'registerCity',
        'purpose'
    ];

    fs.readFile(path, function (err, data) {

        if (err) {
            return console.log(err);
        }

        //Convert and store csv information into a buffer. 
        let bufferString = data.toString();

        let arr = bufferString.split('\n');
        let obj = [];
        // console.log(arr);
        for (let i = 0; i < arr.length - 1; i++) {
            obj[i] = arr[i].slice(0, arr[i].length - 1).split(',');
            console.log(obj[i]);
        }



        if (obj[0] !== template) {
            console.log("file khong dung cau truc");
            ok = false;
            console.log(ok);
        }


        if (ok) {
            for (let i = 1; i < obj.length; i++) {
                let data = {
                    driverId: obj[i][0],
                    plateNumber: obj[i][1],
                    manufacture: obj[i][2],
                    model: obj[i][3],
                    color: obj[i][4],
                    registerDate: obj[i][5],
                    registerCity: obj[i][6],
                    purpose: obj[i][7] 
                }
                if (data.plateNumber !== "")
                    createDB.createCar(data);
            }

            return res.status(200).json({
                errCode: 0,
                errMessage: "Cập nhật dữ liệu thành công"
            })

        } else {
            return res.status(200).json({
                errCode: 2,
                errMessage: "File không đúng cấu trúc"
            })
        }
    });

}

module.exports = {
    handleUploadFile: handleUploadFile,
}