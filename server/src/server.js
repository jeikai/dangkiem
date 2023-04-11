import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB"
import createDB from "./services/createDB"
import cors from 'cors'
require('dotenv').config();


let app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDB();
// createDB.createDB();


let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("app running on port " + port);
});

