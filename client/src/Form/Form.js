import React from "react";
import "./Form.scss";
import axios from "axios";
import { formRoute, createRegistationRoute } from "../utils/routes";



export default function Form() {
  let handleOnblur = async () => {
    let value = document.querySelector("#plateNumber").value;
    let data = await axios.post(formRoute, { "plateNumber": value });
    let formIfo = data.data.data;
    if (data.data.errCode === 0) {
      document.querySelector("#owner").value = formIfo.driverName;
      document.querySelector("#registrationDate").value = formIfo.registrationDate;
      document.querySelector("#expirationDate").value = formIfo.expirationDate;
      document.querySelector("#manufacturer").value = formIfo.manufacture;
      document.querySelector("#vehicleType").value = formIfo.model;
      document.querySelector("#color").value = formIfo.color;
      document.querySelector("#usage").value = formIfo.purpose;
      document.querySelector("#registerDate").value = formIfo.registerDate;
      // ten trung tam dang kiem
      document.querySelector("#inspectionPlace").value = "user name"
    }
  }

  let handleSubmit = async () => {
    console.log("submit");
    let plateNumber = document.querySelector("#plateNumber").value;
    // ten trung tam dang kiem 
    let name = "Trung tâm đăng kiểm Hà Nội 1";
    let registrationDate = document.querySelector("#registrationDate").value;
    let expirationDate = document.querySelector("#expirationDate").value;
    console.log(`${plateNumber} ${name} ${registrationDate} ${expirationDate}`);
    let data = await axios.post(createRegistationRoute, {
      "plateNumber": plateNumber,
      "name": name,
      "registrationDate": registrationDate,
      "expirationDate": expirationDate
    });

    console.log(data);

  }
  return (
    <div className="form-container">
      <h1>Điền vào Biểu mẫu</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">

          <div className="form-input">
            <label for="plateNumber">Biển số xe:</label>
            <input type="text" id="plateNumber" name="plateNumber"
              onBlur={handleOnblur}
              required />
          </div>
          <div className="form-input">
            <label for="owner">Chủ sở hữu:</label>
            <input type="text" id="owner" name="owner" required />
          </div>
          <div className="form-input">
            <label for="registrationDate">Ngày đăng kiểm:</label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              required
            />
          </div>
          <div className="form-input">
            <label for="expirationDate">Ngày hết hạn:</label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              required
            />
          </div>
          <div className="form-input">
            <label for="manufacturer">Nhà sản xuất:</label>
            <input type="text" id="manufacturer" name="manufacturer" required />
          </div>
          <div className="form-input">
            <label for="vehicleType">Kiểu xe:</label>
            <input type="text" id="vehicleType" name="vehicleType" required />
          </div>
          <div className="form-input">
            <label for="color">Màu sắc:</label>
            <input type="text" id="color" name="color" required />
          </div>
          <div className="form-input">
            <label for="registerDate">Ngày đăng kí:</label>
            <input type="date" id="registerDate" name="registerDate" required />
          </div>
          <div className="form-input">
            <label for="usage">Mục đích sử dụng:</label>
            <input type="text" id="usage" name="usage" required />
          </div>
          <div className="form-input">
            <label for="inspectionPlace">Nơi đăng kiểm:</label>
            <input
              type="text"
              id="inspectionPlace"
              name="inspectionPlace"
              required
            />
          </div>
        </div>

        <div className="form-input-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );


}
