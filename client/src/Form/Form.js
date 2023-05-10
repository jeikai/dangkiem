import React, { useRef, useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from '@material-tailwind/react';
import './Form.scss';
import axios from 'axios';
import { formRoute, createRegistationRoute } from '../utils/routes';
import { useReactToPrint } from 'react-to-print';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form({ user }) {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  const componentPDF = useRef();
  const [data, setData] = useState({
    plateNumber: '',
    owner: '',
    registrationDate: '',
    expirationDate: '',
    manufacture: '',
    vehicleType: '',
    color: '',
    registerDate: '',
    useage: '',
    inspectionPlace: '',
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  let handleOnblur = async (e) => {
    e.preventDefault();
    let value = document.querySelector('#plateNumber').value;
    let data = await axios.post(formRoute, { plateNumber: value });
    let formIfo = data.data.data;
    if (data.data.errCode === 0) {
      // document.querySelector('#owner').value = formIfo.driverName;
      setData({
        plateNumber: value,
        owner: formIfo.driverName,
        registrationDate: formIfo.registrationDate,
        expirationDate: formIfo.expirationDate,
        manufacture: formIfo.manufacture,
        vehicleType: formIfo.model,
        color: formIfo.color,
        registerDate: formIfo.registerDate,
        useage: formIfo.purpose,
        inspectionPlace: user.name,
      })
    }
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
  });
  let handleSubmit = async (e) => {
    e.preventDefault();
    let plateNumber = document.querySelector('#plateNumber').value;
    // ten trung tam dang kiem
    let name = document.querySelector('#inspectionPlace').value;
    let registrationDate = document.querySelector('#registrationDate').value;
    let expirationDate = document.querySelector('#expirationDate').value;
    console.log(`${plateNumber} ${name} ${registrationDate} ${expirationDate}`);
    let data = await axios.post(createRegistationRoute, {
      plateNumber: plateNumber,
      id: user.id,
      registrationDate: registrationDate,
      expirationDate: expirationDate,
    });
    toast.error('Đăng kiểm thành công', toastOptions);
    console.log(data);
  };

  return (
    <>
      <Card color="transparent" shadow={false} className="m-10">
        <Typography variant="h2" color="blue">
          Điền vào biễu mẫu đăng kiểm xe
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nhập thông tin xe cần đăng kiểm
        </Typography>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 mb-2 w-full max-w-4xl mx-auto"
        >
          <div className="mb-4 grid gap-10 grid-cols-1 md:grid-cols-2 w-full">
            <Input
              size="lg"
              label="Biển số xe"
              id="plateNumber"
              name="plateNumber"
              onBlur={(e) => handleOnblur(e)}
              required={true}
            />
            <Input
              readOnly={true}
              defaultValue={data.owner}
              size="lg"
              label="Chủ sở hữu"
              id="owner"
              name="owner"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="date"
              defaultValue={data.registrationDate}
              size="lg"
              label="Ngày đăng kiểm"
              id="registrationDate"
              name="registrationDate"
            />
            <Input
              type="date"
              defaultValue={data.expirationDate}
              size="lg"
              label="Ngày hết hạn"
              id="expirationDate"
              name="expirationDate"
            />
            <Input
              readOnly={true}
              defaultValue={data.manufacture}
              size="lg"
              label="Nhà sản xuất"
              id="manufacturer"
              name="manufacturer"
            />
            <Input
              readOnly={true}
              defaultValue={data.vehicleType}
              size="lg"
              label="Kiểu xe"
              id="vehicleType"
              name="vehicleType"
            />
            <Input
              readOnly={true}
              defaultValue={data.color}
              size="lg"
              label="Màu sắc"
              id="color"
              name="color"
            />
            <Input
              readOnly={true}
              defaultValue={data.registerDate}
              size="lg"
              label="Ngày đăng kí"
              id="registerDate"
              name="registerDate"
            />
            <Input
              readOnly={true}
              defaultValue={data.useage}
              size="lg"
              label="Mục đích sử dụng"
              id="usage"
              name="usage"
            />
            <Input
              readOnly={true}
              defaultValue={data.inspectionPlace}
              size="lg"
              label="Nơi đăng kiểm"
              id="inspectionPlace"
              name="inspectionPlace"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Đăng kiểm
          </Button>
          <Button onClick={generatePDF} className="mt-6" fullWidth>
            In ra hoá đơn
          </Button>
          <ToastContainer />
        </form>
      </Card>
      <div className="print_container" ref={componentPDF}>
        <div className="container">
          <div className="section-title">HOÁ ĐƠN ĐĂNG KIỂM</div>
          <div className="content">
            <p>Biển đăng ký (License plate): {data.plateNumber}</p>
            <p>Chủ sở hữu (Owner): {data.owner}</p>
            <p>Ngày đăng kiểm (Inspection Date): {data.registrationDate}</p>
            <p>Ngày hết hạn (Expiration Date): {data.expirationDate}</p>
            <p>Nhà sản xuất (Manufacturer): {data.manufacture}</p>
            <p>Kiểu xe (Vehicle type): {data.vehicleType}</p>
            <p>Màu sắc (Color): {data.color}</p>
            <p>Ngày đăng kí (Registration Date): {data.registerDate}</p>
            <p>Mục đích sử dụng (Purpose of use): {data.useage}</p>
            <p>Nơi đăng kiểm (Place of registration): {data.inspectionPlace}</p>
          </div>
          <div className="sign">
            <div>
              <p>Chữ ký Trung tâm đăng kiểm</p>
              <i>(Ký và ghi rõ họ tên)</i>
            </div>
            <div>
              <p>Chữ ký chủ phương tiện</p>
              <i>(Ký và ghi rõ họ tên)</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}