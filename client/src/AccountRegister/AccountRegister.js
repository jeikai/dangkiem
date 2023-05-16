import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import './AccountRegister.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser, userRoute } from '../utils/routes';
export default function () {
  const [check, setCheck] = useState()
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
    let res = await axios.post(userRoute, {
      username: value
    })
    if (res.data.errCode == 1) {
      setCheck(false)
      toast.error("Tên đăng nhập đã tồn tại", toastOptions)
    } else {
      setCheck(true)
    }
  }
  const handleValidation = () => {
    const { center, username, password, repass, address } = data
    if (!center || !username || !password || !repass || !address) {
      toast.error("Không được để trống", toastOptions)
      return false;
    }
    else if (password != repass) {
      toast.error("Mật khẩu không trùng khớp", toastOptions)
      return false;
    } else if (!check) {
      toast.error("Tên đăng nhập đã tồn tại", toastOptions)
      return false;
    }
    return true
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { center, username, password, address } = data
    if (handleValidation()) {
      toast.success("Đăng ký thành công", toastOptions)
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
            <div className="w-full">
              <Input
                label="Tên trung tâm đăng kiểm"
                name="center"
                id="center"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="w-full">
              <Input
                label="Tên đăng nhập"
                name="username"
                id="username"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnblur(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="w-full">
              <Input
                label="Mật khẩu"
                type="password"
                name="password"
                id="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="w-full">
              <Input
                label="Xác nhận mật khẩu"
                type="password"
                name="repass"
                id="repass"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="w-full">
              <Input
                label="Địa chỉ"
                name="address"
                id="address"
                onChange={(e) => handleChange(e)}
              />
            </div>
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
