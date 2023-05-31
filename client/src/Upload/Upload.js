import React, { useState } from 'react';
import { Typography, Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { uploadRoute } from "../utils/routes";

const Upload = () => {
  //Setting cho thông báo
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  //Khởi tạo giá trị cho file là null
  const [file, setFile] = useState(null);
  //Hàm thay đổi giá trị
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  //Hàm submit khi người dùng ấn upload
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(uploadRoute, formData);
      console.log(response);
      if (response.data.errCode === 0) {
        toast.success(response.data.errMessage, toastOptions);
      } else if (response.data.errCode === 1 || response.data.errCode === 2) {
        toast.error(response.data.errMessage, toastOptions);
      }

    } catch (error) {
      console.error(error);
    }
  };
  //Mã giao diện
  return (
    <div className="max-w-7xl mx-auto">
  <div className="p-10">
    <h1 className="text-white text-4xl font-bold mb-6">
      Upload danh sách các xe đã đăng ký lên hệ thống
    </h1>
    <p className="text-gray-300 text-lg mb-6">
      Vui lòng chọn file có định dạng CSV.
    </p>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="flex items-center mb-6">
        <label htmlFor="fileInput" className="text-gray-200 mr-4">
          Chọn file:
        </label>
        <input
          id="fileInput"
          className="hidden"
          type="file"
          onChange={handleFileInputChange}
          accept=".csv,.xlsx"
        />
        <label
          htmlFor="fileInput"
          className="bg-white text-purple-500 hover:text-purple-700 font-medium py-2 px-4 rounded-lg cursor-pointer shadow-md"
        >
          Chọn File
        </label>
      </div>
      {file && (
        <button
          type="submit"
          className="bg-indigo-500 text-white hover:bg-indigo-700 font-medium py-2 px-4 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 1a1 1 0 0 0-1 1v5.586L4.707 5.293A1 1 0 1 0 3.293 6.707l4 4a1 1 0 0 0 1.414 0l4-4A.997.997 0 0 0 13 5V2a1 1 0 0 0-1-1H9zM6 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H6z"
            />
          </svg>
          Tải lên File
        </button>
      )}
    </form>
  </div>
  <ToastContainer />
</div>

  );
};

export default Upload;