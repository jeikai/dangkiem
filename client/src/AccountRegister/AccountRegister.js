import React, { useState } from 'react';
import './AccountRegister.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from '../utils/routes';
export default function () {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  const [data, setData] = useState({
    center: '',
    username: '',
    password: '',
    repass: '',
    address: '',
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const handleOnblur = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    
  }
  const handleValidation = () => {
    const {center, username, password, repass, address} = data
    if (!center || !username || !password || !repass || !address) {
      toast.error("Không được để trống", toastOptions)
      return false;
    }
    else if ( password != repass) {
      toast.error("Mật khẩu không trùng khớp", toastOptions)
      return false;
    }
    return true
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {center, username, password, address} = data
    toast.success("Đăng ký thành công", toastOptions)
    if ( handleValidation()) {
      const regis = await axios.post(createUser, {
        name: center,
        username: username,
        password: password,
        rolebit: 0,
        address: address,
      });
    }
  };
  return (
    <div className="account-register">
      <div className="register">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h2>ĐĂNG KÍ TÀI KHOẢN CHO TRUNG TÂM ĐĂNG KIỂM</h2>
          <img src="./img/logo.png" />
          <div className="inputbox">
            <i class="fa-solid fa-user-tie"></i>
            <input
              type="text"
              name="center"
              id="center"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="center">Tên trung tâm đăng kiểm</label>
          </div>
          <div className="inputbox">
            <i class="fa-regular fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="username">Tên đăng nhập</label>
          </div>

          <div className="inputbox">
            <i class="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="password">Mật khẩu</label>
          </div>

          <div className="inputbox">
            <i class="fa-solid fa-repeat"></i>
            <input
              type="password"
              name="repass"
              id="repass"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="repass">Xác nhận mật khẩu</label>
          </div>
          <div className="inputbox">
            <i class="fa-solid fa-location-dot"></i>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="address">Địa chỉ</label>
          </div>
          <button type="submit" id="register-button">
            Tạo tài khoản
          </button>
        </form>
        
      </div>
      <ToastContainer />
    </div>
  );
}
