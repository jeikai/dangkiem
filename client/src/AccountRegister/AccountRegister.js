import React from "react";
import "./AccountRegister.scss";

export default function () {
  return (
    <div className="account-register">
      <div className="register">
        <form action=""> 
          <h2>ĐĂNG KÍ TÀI KHOẢN CHO TRUNG TÂM ĐĂNG KIỂM</h2>
          <img src="./img/logo.png" />
          <div className="inputbox">
            <i class="fa-regular fa-user"></i>
            <input type="text" name="center" id="center"></input>
            <label for="center">Tên trung tâm đăng kiểm</label>
          </div>
          <div className="inputbox">
            <i class="fa-regular fa-user"></i>
            <input type="text" name="username" id="username"></input>
            <label for="username">Tên đăng nhập</label>
          </div>

          <div className="inputbox">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" id="password"></input>
            <label for="password">Mật khẩu</label>
          </div>

          <div className="inputbox">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="repass" id="repass"></input>
            <label for="repass">Xác nhận mật khẩu</label>
          </div>
          <button type="button" id="register-button">
            Tạo tài khoản
          </button>
        </form>
      </div>
    </div>
  );
}
