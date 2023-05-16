import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input class="custom-file-input" type="file" onChange={handleFileInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;