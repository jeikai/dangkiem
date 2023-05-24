import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
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
      // console.log(data.data)
      if (data.data.status == false) {
        toast.error(data.data.message, toastOptions);
      } else {
        localStorage.setItem(
          "user",
          data.data.userData
        );
        navigate('/')
        window.location.reload();
      }
    }
  }

  return (
    <div className="flex h-screen w-full items-center mt-12" shadow={true}>
      <Card className="w-96 mx-auto flex justify-center align-center" >
        <form onSubmit={handleSubmit}>
          <CardHeader shadow={false} className="flex flex-col items-center">
            <img className="w-48" src="./img/logo.png" />
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue">
              Đăng nhập
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Điền tên đăng nhập và mật khẩu để đăng nhập vào trung tâm đăng kiểm hoặc cục đăng kiểm
            </Typography>
            <Input size="lg" label="Tên đăng nhập" name="username" onChange={(e) => handleChange(e)} />
            <Input type="password" size="lg" label="Mật khẩu" name="password" onChange={(e) => handleChange(e)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" className="mt-6" fullWidth>
              Đăng nhập
            </Button>
          </CardFooter>
        </form>
        <ToastContainer />
      </Card>
    </div>
  );
}
