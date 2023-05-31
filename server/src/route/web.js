import express from "express";
import userController from "../controllers/userController";
import registerFormController from "../controllers/registerFormCotroller";
import statsController from "../controllers/statsController";
import uploadFileController from "../controllers/uploadFileController";
import chatbotController from "../controllers/chatbotController"
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

let login = true;

let initWebRoutes = (app) => {
  //Upload file
  router.post(
    "/api/postfile",
    upload.single("file"),
    uploadFileController.handleUploadFile
  );

  router.post("/api/login", userController.handleLogin);
  //Verify token
  router.post("/api/verify", userController.handleVerify);

  router.post("/api/form", userController.handleRegister);
  router.post("/api/user", userController.handleUser);
  //Đăng kiểm xe
  router.post("/api/create-register", registerFormController.createRegister);
  //Xoá đăng kiểm
  router.delete(
    "/api/delete-register/:id",
    registerFormController.deleteRegister
  );
  //Update đăng kiểm
  router.put("/api/update-register/:id", registerFormController.updateRegister);
  // DỮ liệu thống kê
  router.get("/api/stats/:id", statsController.handleStats);
  // Hết hạn và chưa hết hạn cho trung tâm đăng kiểm
  router.get("/api/unexpired/:id", statsController.handleGetUnexpiredData);
  router.get("/api/expired/:id", statsController.handleGetExpiredData);
  // Dữ liệu thống kê cho trang chủ trung tâm đăng kiểm
  router.get("/api/history/:id", registerFormController.handleGetRegister);
  //Dữ liệu theo từng trung tâm cho cục
  router.get(
    "/api/historyCucdangkiem",
    registerFormController.handleGetRegisterCucDangKiem
  );
  //Đăng ký trung tâm đăng kiểm
  router.post("/api/create-user", userController.createUser);
  //DÙng cho chatbot
  router.get("/api/chatbot/:id", chatbotController.handleChat)
  return app.use("/", router);
};

if (login === true)
  module.exports = initWebRoutes;
