import React, { useState } from 'react';
import { Typography, Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import axios from 'axios';
import { uploadRoute } from "../utils/routes";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log("submit form");
      const response = await axios.post(uploadRoute, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h1" className="text-white p-10">Upload file danh sách các xe đã đăng ký lên hệ thống</Typography>
      <Typography className="px-10 text-gray-300">
        File phải có định dạng xlsx hoặc csv
      </Typography>
      <form onSubmit={handleSubmit} className='flex flex-col justify-start p-10 w-80'>
        <input className="custom-file-input" type="file" onChange={handleFileInputChange} accept=".csv,.xlsx" />
        {file && (
          <Button variant="gradient" type="submit" className="flex items-center gap-3 mt-10">
            <CloudArrowUpIcon strokeWidth={2} className="h-5 w-5" /> Upload Files
          </Button>
        )}
      </form>
    </div>
  );
};

export default Upload;