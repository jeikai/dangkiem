import React, { useRef } from "react";
import "./Login.scss";
import { loginRoute } from "../utils/routes";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const navigate = useNavigate()
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values)
  }
  const handleValidation = () => {
    const { username, password } = values
    if (!username || !password) {
      toast.error("Tên người dùng hoặc mật khẩu không được để trống", toastOptions);
      return false;
    }
    return true
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation()) {
      const { username, password } = values
      const user = {
        username: username,
        password: password
      }
      const data = await axios.post(loginRoute, user)
      console.log(data.data)
      if (data.data.status == false) {
        toast.error(data.data.message, toastOptions);
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify(data.data.userData)
        );
        navigate('/')
        window.location.reload();
      }
    }
  }
  return (

    <section>
      <div className="login">
        <form onSubmit={handleSubmit} >
          <h2>CỤC ĐĂNG KIỂM VIỆT NAM</h2>
          <img src="./img/logo.png" />
          <div className="inputbox">
            <i class="fa-regular fa-user"></i>
            <input type="text" name="username" id="username"
              onChange={(e) => handleChange(e)}></input>
            <label for="username">Tên đăng nhập</label>
          </div>

          <div className="inputbox">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" id="password"
              onChange={(e) => handleChange(e)}></input>
            <label for="password">Mật khẩu</label>
          </div>
          <button type="submit" id="login-button">
            Đăng nhập
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
