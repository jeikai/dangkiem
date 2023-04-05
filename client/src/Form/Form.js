import React from "react";
import "./Form.scss";

export default function Form() {
  return (
    <div className="form-container">
      <h1>Điền vào Biểu mẫu</h1>
      <form>
        <div className="form-input-container">
          <div className="form-input">
            <label for="owner">Chủ sở hữu:</label>
            <input type="text" id="owner" name="owner" required />
          </div>
          <div className="form-input">
            <label for="licensePlate">Biển số xe:</label>
            <input type="text" id="licensePlate" name="licensePlate" required />
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
