import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import registerFormController from "../controllers/registerFormCotroller";
import statsController from "../controllers/statsController";
import uploadFileController from "../controllers/uploadFileController";

const multer = require("multer");
import path from "path";

let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/postCrud", homeController.postCRUD);
  router.get("/uploadfile", homeController.getUploadFilePage);
  router.post(
    "/api/postfile",
    upload.single("file"),
    uploadFileController.handleUploadFile
  );

  router.post("/post-rud", homeController.displayPostCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);

  router.post("/api/login", userController.handleLogin);
  router.post("/api/form", userController.handleRegister);
  router.post("/api/user", userController.handleUser);
  router.post("/api/create-register", registerFormController.createRegister);
  router.delete(
    "/api/delete-register/:id",
    registerFormController.deleteRegister
  );
  router.put("/api/update-register/:id", registerFormController.updateRegister)
  router.put("/api/update-driver/:id", registerFormController.updateDriver)
  router.get("/api/stats/:id", statsController.handleStats);
  router.get("/api/unexpired/:id", statsController.handleGetUnexpiredData);
  router.get("/api/expired/:id", statsController.handleGetExpiredData);
  router.get("/api/history/:id", registerFormController.handleGetRegister);
  router.get(
    "/api/historyCucdangkiem",
    registerFormController.handleGetRegisterCucDangKiem
  );
  router.post("/api/create-user", userController.createUser);
  return app.use("/", router);
};

module.exports = initWebRoutes;
