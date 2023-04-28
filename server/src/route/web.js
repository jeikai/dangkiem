import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import registerFormController from "../controllers/registerFormCotroller"
import statsController from "../controllers/statsController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/postCrud', homeController.postCRUD);

    router.post('/post-rud', homeController.displayPostCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/form', userController.handleRegister);
    router.post('/api/create-register', registerFormController.createRegister);
    router.get('/api/stats/:id', statsController.handleStats);
    router.get('/api/history/:id', statsController.handleGetRegister);


    return app.use("/", router);
}

module.exports = initWebRoutes;