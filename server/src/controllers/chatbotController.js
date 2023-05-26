import db from "../models/index";
import chatService from "../services/chatService"
function Time() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  let now = new Date(today);
  return now;
}
function TrungBinhCong(a, b, c) {
  return (a + b + c) / 3;
}
function tinhTrungBinhCong(arr) {
  if (arr.length === 0) {
    return 0;
  }

  var tong = arr.reduce(function(a, b) {
    return a + b;
  });

  var trungBinhCong = tong / arr.length;
  return trungBinhCong;
}
let handleChat = async (req, res) => {
  let userId = req.params.id;
  let data = await chatService.getData(userId);
  let car = await chatService.getCar();
  let registerByMonth = []
  let forecast = [];
  let data_forcast = []
  let count = [];
  for (let i = 0; i < 12; i++) {
    forecast[i] = 0;
  }
  for (let i = 0; i < 15; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < data.length; i++) {
    let b = new Date(data[i].registerDate);
    for (let j = 0; j < 12; j++) {
      if (
        b.getMonth() + 1 == j + 1 &&
        b.getFullYear() == Time().getFullYear() - 1
      ) {
        ++count[j + 3];
        data_forcast.push(data[i])
      } else if (
        b.getFullYear() == Time().getFullYear() - 2 &&
        (b.getMonth() + 1 == 10 ||
          b.getMonth() + 1 == 11 ||
          b.getMonth() + 1 == 12)
      ) {
        ++count[b.getMonth() - 10];
        data_forcast.push(data[i])
      }
    }
  }
  let month_now = Time().getMonth();
  for (let i = month_now; i < 12; i++) {
    forecast[i] = TrungBinhCong(
      count[i + 3],
      count[i + 3 - 1],
      count[i + 3 - 2]
    );
    forecast[i] = Math.round(forecast[i]);
  }
  let dudoan = tinhTrungBinhCong(forecast)
  for( let i = 0; i< data.length; i++) {
    let a = new Date(data[i].registerDate);
    if ( a.getMonth() == Time().getMonth()) {
      registerByMonth.push(data[i])
    }
  }
  let message_car = "Tổng hiện tại đã có " + car.length + " xe đã đăng ký"
  let message_registerByMonth = "Hiện tại có " + registerByMonth.length + " xe đến đăng kiểm tháng này:\n"
  for ( let i = 0; i< registerByMonth.length; i++) {
    message_registerByMonth += registerByMonth[i]['Car.Driver.driverName'] + " - " + registerByMonth[i]['Car.Driver.phoneNumber'] + " - " + registerByMonth[i]['Car.plateNumber'] + ".\n"
  }
  let message_dubao = "Trong vòng thời điểm hiện tại đến cuối năm thì trung bình mỗi tháng sẽ có " + Math.round(dudoan) + " xe đăng kiểm và đây là danh sách thông tin:\n"
  for ( let i = 0; i< data_forcast.length; i++) {
    message_dubao += data_forcast[i]['Car.Driver.driverName'] + " - " + data_forcast[i]['Car.Driver.phoneNumber'] + " - " + data_forcast[i]['Car.plateNumber'] + ".\n"
  }
  return res.status(200).json({
    errCode: 0, 
    errMessage: "get data success",
    dubao: message_dubao,
    car: message_car,
    registerByMonth: message_registerByMonth
  });
};

module.exports = {
  handleChat: handleChat,
};
