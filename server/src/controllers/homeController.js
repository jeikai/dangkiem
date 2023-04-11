import { log } from 'console';
import db from '../models/index';
import CRUDService from '../services/CRUDService'

let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log("-------------------------------");
    console.log(data);
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
}