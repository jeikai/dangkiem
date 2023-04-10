import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <section>
      <div className="login">
        <form action="">
          <h2>CỤC ĐĂNG KIỂM VIỆT NAM</h2>
          <img src="./img/logo.png" />
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
          <button type="button" id="login-button">
            Đăng nhập
          </button>
        </form>
      </div>
    </section>
  );
}
