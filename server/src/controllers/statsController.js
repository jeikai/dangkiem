import statsService from "../services/statsService";
import db from "../models/index";

function Time() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  let now = new Date(today);
  return now;
}
function Convert(a) {
  a *= 0.001;
  a /= 3600;
  a /= 24;
  return a;
}
function TrungBinhCong (a, b, c) {
    return (a+b+c)/3;
}
let handleStats = async (req, res) => {
  let userId = req.params.id;
  let data = await statsService.handleStats(userId);
  let month_expired = [];
  let forecast = [];
  let count = [];
  for (let i = 0; i < 12; i++) {
    month_expired[i] = 0;
    forecast[i] = 0;
  }
  for(let i = 0; i< 15;i++) {
    count[i] = 0
  }
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    let b = new Date(data[i].registerDate);
    for (let j = 0; j < 12; j++) {
      if (a.getMonth() == j) {
        if (Convert(Time() - a) >= 0) {
          ++month_expired[j];
        }
      }
      if (
        b.getMonth() + 1 == j + 1 
        &&
        b.getFullYear() == Time().getFullYear() - 1
      ) {
        ++count[j+3];
      } else if (
        b.getFullYear() == Time().getFullYear() - 2
        &&
        (b.getMonth() + 1 == 10 || b.getMonth() + 1 == 11 || b.getMonth() + 1 == 12 )
      ) {
        ++count[b.getMonth() - 10]
      }
    }
  }
  let month_now = Time().getMonth();
  for ( let i = month_now; i< 12; i++) {
    forecast[i] = TrungBinhCong(count[i+3], count[i+3-1], count[i+3-2])
    forecast[i] = Math.round(forecast[i])
  }
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    month_expired: month_expired,
    forecast: forecast
  });
};
let handleGetExpiredData = async (req, res) => {
  let userId = req.params.id;
  let data = await statsService.handleStats(userId);
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    if (Convert(Time() - a) < 0) {
      delete data[i];
    }
  }
  // console.log(data.length)
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    data: data,
  });
};
let handleGetUnexpiredData = async (req, res) => {
  let userId = req.params.id;
  let data = await statsService.handleStats(userId);
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    if (Convert(Time() - a) >= 0) {
      delete data[i];
    }
  }
  // console.log(data.length)
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    data: data,
  });
};
module.exports = {
  handleStats: handleStats,
  handleGetExpiredData: handleGetExpiredData,
  handleGetUnexpiredData: handleGetUnexpiredData,
};
