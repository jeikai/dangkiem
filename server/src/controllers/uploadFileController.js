import fs from "fs"
import registerService from "../services/registerService"

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
                plateNumber: obj[i][0],
                id: obj[i][1],
                registrationDate: obj[i][2],
                expirationDate: obj[i][3]
            }

            registerService.createRegister(data);
        }
    });

    res.status(200).send("upload file succeed")

}

module.exports = {
    handleUploadFile: handleUploadFile,
}