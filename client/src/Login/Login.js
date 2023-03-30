import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div id="login">
      <form id="login-panel">
        <h1>CỤC ĐĂNG KIỂM VIỆT NAM</h1>
        <img src="./img/logo.png" />
        <input type="text" id="username" placeholder="Tên đăng nhập"></input>
        <input type="password" id="password" placeholder="Mật khẩu"></input>
        <button type="button" id="login-button">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
