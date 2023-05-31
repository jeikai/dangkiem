import statsService from "../services/statsService";
import db from "../models/index";

//Lấy ra thời gian hiện tại
function Time() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  let now = new Date(today);
  return now;
}
//Hàm Convert từ milisecond sang ngày
function Convert(a) {
  a *= 0.001;
  a /= 3600;
  a /= 24;
  return a;
}
//Hàm tính trung bình cộng cho dự báo
function TrungBinhCong(a, b, c) {
  return (a + b + c) / 3;
}
//Hàm xử lý và trả về thống kê theo tháng
function countAndSortOccurrencesByYearMonth(data) {
  var counts = {};

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var registerDate = new Date(item.registerDate);
    var yearMonth =
      registerDate.getFullYear() + "-" + (registerDate.getMonth() + 1);

    // Nếu năm và tháng đã xuất hiện trước đó, tăng giá trị đếm lên 1
    if (counts[yearMonth]) {
      counts[yearMonth] += 1;
    }
    // Nếu năm và tháng chưa xuất hiện trước đó, đặt giá trị đếm là 1
    else {
      counts[yearMonth] = 1;
    }
  }

  // Chuyển đổi đối tượng counts thành một mảng các cặp key-value
  var countsArray = Object.entries(counts);

  // Sắp xếp mảng countsArray theo thời gian tăng dần
  countsArray.sort(function (a, b) {
    var dateA = new Date(a[0]);
    var dateB = new Date(b[0]);
    return dateA - dateB;
  });

  return countsArray;
}
//Hàm xử lý và trả về thống kê theo quý
function countAndSortOccurrencesByQuarterYear(data) {
  var counts = {};

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var registerDate = new Date(item.registerDate);
    var quarter = Math.floor((registerDate.getMonth() + 3) / 3); // Tính quý
    var year = registerDate.getFullYear();

    // Tạo chuỗi quý/năm
    var quarterYear = 'Q' + quarter + '/' + year;

    // Nếu quý/năm đã xuất hiện trước đó, tăng giá trị đếm lên 1
    if (counts[quarterYear]) {
      counts[quarterYear] += 1;
    }
    // Nếu quý/năm chưa xuất hiện trước đó, đặt giá trị đếm là 1
    else {
      counts[quarterYear] = 1;
    }
  }

  // Chuyển đổi đối tượng counts thành một mảng các cặp key-value
  var countsArray = Object.entries(counts);

  // Sắp xếp mảng countsArray theo thời gian tăng dần
  countsArray.sort(function(a, b) {
    var quarterA = parseInt(a[0].split('/')[0].slice(1)); // Trích xuất quý từ chuỗi quý/năm
    var yearA = parseInt(a[0].split('/')[1]); // Trích xuất năm từ chuỗi quý/năm
    var quarterB = parseInt(b[0].split('/')[0].slice(1));
    var yearB = parseInt(b[0].split('/')[1]);

    // So sánh năm trước, nếu bằng nhau thì so sánh quý
    if (yearA === yearB) {
      return quarterA - quarterB;
    }

    return yearA - yearB;
  });

  return countsArray;
}
//Hàm xử lý và trả về thống kê theo năm
function countAndSortOccurrencesByYear(data) {
  var counts = {};

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var registerDate = new Date(item.registerDate);
    var year = registerDate.getFullYear();

    // Nếu năm đã xuất hiện trước đó, tăng giá trị đếm lên 1
    if (counts[year]) {
      counts[year] += 1;
    }
    // Nếu năm chưa xuất hiện trước đó, đặt giá trị đếm là 1
    else {
      counts[year] = 1;
    }
  }

  // Chuyển đổi đối tượng counts thành một mảng các cặp key-value
  var countsArray = Object.entries(counts);

  // Sắp xếp mảng countsArray theo năm tăng dần
  countsArray.sort(function(a, b) {
    return parseInt(a[0]) - parseInt(b[0]);
  });

  return countsArray;
}
//Hàm xử lí thống kê
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
  for (let i = 0; i < 15; i++) {
    count[i] = 0;
  }
  //Xử lí dữ liệu
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    let b = new Date(data[i].registerDate);
    for (let j = 0; j < 12; j++) {
      //Xử lí dữ liệu thống kê xe sắp hết hạn là xa có thời gian thời điểm hiện tại đến thời điển hết hạn là bé hơn 30 ngày
      if (a.getMonth() == j && Time().getFullYear() == a.getFullYear()) {
        if (Convert(a - Time()) <= 30 && Convert(a - Time()) >= 0) {
          ++month_expired[j];
        }
      }
      //Xử lí thống kê dự báo
      if (
        b.getMonth() + 1 == j + 1 &&
        b.getFullYear() == Time().getFullYear() - 1
      ) {
        ++count[j + 3];
      } else if (
        b.getFullYear() == Time().getFullYear() - 2 &&
        (b.getMonth() + 1 == 10 ||
          b.getMonth() + 1 == 11 ||
          b.getMonth() + 1 == 12)
      ) {
        ++count[b.getMonth() - 10];
      }
    }
  }
  //Lấy ra tháng hiện tại
  let month_now = Time().getMonth();
  for (let i = month_now; i < 12; i++) {
    forecast[i] = TrungBinhCong(
      count[i + 3],
      count[i + 3 - 1],
      count[i + 3 - 2]
    );
    forecast[i] = Math.round(forecast[i]);
  }

  let occurrencesByYearMonth = countAndSortOccurrencesByYearMonth(data);
  let occurrencesByQuarterYear = countAndSortOccurrencesByQuarterYear(data);
  let occurrencesByYear = countAndSortOccurrencesByYear(data);
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    month_expired: month_expired,
    forecast: forecast,
    registerByMonth: occurrencesByYearMonth,
    registerByQuy: occurrencesByQuarterYear,
    registerByYear: occurrencesByYear
  });
};
//Trả về dữ liệu đăng kiểm sắp hết hạn
let handleGetExpiredData = async (req, res) => {
  let userId = req.params.id;
  let data = await statsService.handleStats(userId);
  let data2 = [];
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    if (Convert(a - Time()) <= 30 && Convert(a - Time()) >= 0) {
      data2.push(data[i]);
    }
  }
  // console.log(data.length)
  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    data: data2,
  });
};
//Trả về dữ liệu đăng kiểm chưa hết hạn
let handleGetUnexpiredData = async (req, res) => {
  let userId = req.params.id;
  let data = await statsService.handleStats(userId);
  let data2 = [];
  for (let i = 0; i < data.length; i++) {
    let a = new Date(data[i].expireDate);
    if (Convert(Time() - a) < 0) {
      data2.push(data[i]);
    }
  }

  return res.status(200).json({
    errCode: 0,
    errMessage: "get data success",
    data: data2,
  });
};

module.exports = {
  handleStats: handleStats,
  handleGetExpiredData: handleGetExpiredData,
  handleGetUnexpiredData: handleGetUnexpiredData,
};
