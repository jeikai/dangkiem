import express from "express";
import bodyParser from "body-parser";

import connectDB from "./config/connectDB"
require('dotenv').config();


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



connectDB();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("app running on port " + port);
});

