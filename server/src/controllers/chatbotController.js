import db from "../models/index";
import chatService from "../services/chatService"
let handleChat = async (req, res) => {
  let userId = req.params.id;
  let dubao = await chatService.getDubao(userId);
  let car = await chatService.getCar();
  let message_car = "Tổng hiện tại đã có " + car.length + " xe đã đăng ký"
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    dubao: dubao,
    car: message_car,
  });
};

module.exports = {
  handleChat: handleChat,
};
