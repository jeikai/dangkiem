import React, { useState } from 'react';
import { Typography, Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  BookmarkIcon,
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
    <div className='max-w-7xl mx-auto'>
      <Typography variant="h1" className="text-white p-10">Upload file danh sách các xe đã đăng ký lên hệ thống</Typography>
      <Typography className="px-10 text-gray-300">
        File phải có định dạng csv
      </Typography>
      <form onSubmit={handleSubmit} className='flex flex-col justify-start p-10 w-80' encType='multipart/form-data'>
        <input className="custom-file-input" type="file" onChange={handleFileInputChange} accept=".csv,.xlsx" />
        {file && (
          <Button variant="gradient" type="submit" className="flex items-center gap-3 mt-10">
            <CloudArrowUpIcon strokeWidth={2} className="h-5 w-5" /> Upload Files
          </Button>
        )}
        <ToastContainer />
      </form>
    </div>
  );
};

export default Upload;