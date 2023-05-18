import fs from "fs"
import registerService from "../services/registerService"
import createDB from "../services/createDB"

let handleUploadFile = (req, res) => {
    let path = req.file.path;
    console.log(path);

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

            createDB.createCar(data);
        }
    });

    return res.status(200).json({
        message: "upload file success"
    })

}

module.exports = {
    handleUploadFile: handleUploadFile,
}