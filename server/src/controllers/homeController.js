import { log } from 'console';
import db from '../models/index';
import CRUDService from '../services/CRUDService'
import fs from "fs"

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getUploadFilePage = (req, res) => {
    return res.render('uploadfile.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

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
        console.log(arr);
        for (let i = 0; i < arr.length - 1; i++) {
            obj[i] = arr[i].slice(0, arr[i].length - 1).split(',');
            console.log(obj[i]);
        }
    });

    res.status(200).send("upload file succeed")

}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createUser(req.body);
    // console.log(message);
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log("-------------------------------");
    // console.log(data);
    res.send("get display crud");
}

let displayPostCRUD = () => {

}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayPostCRUD: displayPostCRUD,
    displayGetCRUD: displayGetCRUD,
    getUploadFilePage: getUploadFilePage,
    handleUploadFile: handleUploadFile
}