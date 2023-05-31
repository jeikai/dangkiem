import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { updatePass, userRoute } from '../utils/routes';
function Repass({ token }) {
  const [check, setCheck] = useState();
  const formRef = useRef(null);
  // Setting cài đặt dành cho toast thông báo khi bắt sự kiện
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  const [data, setData] = useState({
    username: '',
    password: '',
    repass: '',
  });
  //Hàm thay đổi giá trị mỗi khi có input từ bàn phím
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  //Hàm check xem username đã tồn tại hay chưa
  const handleOnblur = async (e) => {
    e.preventDefault();
    let value = e.target.value;

    //Call API
    let res = await axios.post(userRoute, {
      username: value,
    });
    //Nếu như username đã tồn tại sẽ thông báo lỗi cho người dùng. Ngược lại set check = true
    if (res.data.errCode == 1) {
      setCheck(true);
    } else {
      setCheck(false);
      toast.error('Tên đăng nhập không tồn tại', toastOptions);
    }
  };
  //Hàm validate giá trị
  const handleValidation = () => {
    const { username, password, repass} = data;
    if (!username || !password || !repass) {
      toast.error('Không được để trống', toastOptions);
      return false;
    } else if (password != repass) {
      toast.error('Mật khẩu không trùng khớp', toastOptions);
      return false;
    } else if (!check) {
      toast.error('Tên đăng nhập không tồn tại', toastOptions);
      return false;
    }
    return true;
  };

  //Hàm submit khi người dùng ấn tạo tài khoản
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password} = data;
    if (handleValidation()) {
      const regis = await axios.put(updatePass, {
        username: username,
        password: password,
        token: token,
      });
      console.log(regis.data);
      if (regis.data.status == false) {
        toast.error("Không thể đổi mật khẩu", toastOptions);
      } else {
        toast.success('Đổi mật khẩu thành công', toastOptions);
        formRef.current.reset();
      }
    }
  };
  return (
    <div class="container mx-auto py-8">
      <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div class="px-6 py-4">
          <h2 class="text-2xl font-bold mb-2 text-center">
            Đổi mật khẩu cho trung tâm đăng kiểm
          </h2>
          <form action="" onSubmit={(e) => handleSubmit(e)} ref={formRef}>
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Username của trung tâm
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                name="username"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleOnblur(e)}
              />
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Mật khẩu mới
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                name="password"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="mb-4">
              <label
                for="confirm-password"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Xác nhận lại mật khẩu
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                name="repass"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Hoàn thành
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Repass;
