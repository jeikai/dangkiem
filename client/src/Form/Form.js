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
export default function Form({ user, token }) {
  const [check, setCheck] = useState();
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
    let value = document.getElementById("plateNumber").value;
    let data = await axios.post(formRoute, { plateNumber: value });
    console.log(data);
    if (data.data.errCode != 0) {
      toast.error(data.data.errMessage, toastOptions);
      setCheck(false);
    } else {
      toast.success(data.data.errMessage, toastOptions);
      setCheck(true);
    }

    let formIfo = data.data.data;
    if (data.data.errCode === 0) {
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
      });
    }
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
  });
  const handleValidation = (
    owner,
    registrationDate,
    expirationDate,
    manufacture,
    vehicleType,
    color,
    registerDate,
    useage,
    inspectionPlace
  ) => {
    if (!check) {
      toast.error('Biển số xe không tồn tại', toastOptions);
      return false;
    } else if (
      !owner ||
      !registrationDate ||
      !expirationDate ||
      !manufacture ||
      !vehicleType ||
      !color ||
      !registerDate ||
      !useage ||
      !inspectionPlace
    ) {
      toast.error('Bạn phải điền full', toastOptions);
      return false;
    }
    return true;
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let plateNumber = data.plateNumber;
    // ten trung tam dang kiem
    let name = data.inspectionPlace;
    let registrationDate = data.registrationDate;
    let expirationDate = data.expirationDate;
    let owner = data.owner;
    let manufacture = data.manufacture;
    let vehicleType = data.vehicleType;
    let color = data.color;
    let registerDate = data.registerDate;
    let usage = data.useage;
    if (
      handleValidation(
        owner,
        registrationDate,
        expirationDate,
        manufacture,
        vehicleType,
        color,
        registerDate,
        usage,
        name
      )
    ) {
      toast.success('Đăng kiểm thành công', toastOptions);
      let regis = await axios.post(createRegistationRoute, {
        plateNumber: plateNumber,
        id: user.id,
        registrationDate: registrationDate,
        expirationDate: expirationDate,
        token: token
      });
    }
  };

  return (
    <>
      <Card color="transparent" shadow={false} className="m-10">
        <Typography variant="h2" className="text-gray-100">
          Điền vào biễu mẫu đăng kiểm xe
        </Typography>
        <Typography className="text-gray-300 mt-1 font-normal">
          Nhập thông tin xe cần đăng kiểm
        </Typography>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 mb-2 w-full max-w-4xl mx-auto"
        >
          <div className=" mb-4 grid gap-10 grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative flex w-full">
              <Input
                size="lg"
                label="Biển số xe"
                id="plateNumber"
                name="plateNumber"
                className="pr-20"
                color='white'
                required={true}
              />
              <Button
                size="sm"
                className="!absolute right-1 top-1 rounded"
                onClick={(e) => handleOnblur(e)}
              >
                Tìm kiếm
              </Button>

            </div>
            <Input
              readOnly={true}
              defaultValue={data.owner}
              className='text-red-600'
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
              color='white'
              label="Ngày đăng kiểm"
              id="registrationDate"
              name="registrationDate"
            />
            <Input
              type="date"
              color='white'
              defaultValue={data.expirationDate}
              size="lg"
              label="Ngày hết hạn"
              id="expirationDate"
              name="expirationDate"
            />
            <Input
              readOnly={true}
              defaultValue={data.manufacture}
              className='text-red-600'
              size="lg"
              label="Nhà sản xuất"
              id="manufacturer"
              name="manufacturer"
            />
            <Input
              readOnly={true}
              defaultValue={data.vehicleType}
              className='text-red-600'
              size="lg"
              label="Kiểu xe"
              id="vehicleType"
              name="vehicleType"
            />
            <Input
              readOnly={true}
              defaultValue={data.color}
              className='text-red-600'
              size="lg"
              label="Màu sắc"
              id="color"
              name="color"
            />
            <Input
              readOnly={true}
              defaultValue={data.registerDate}
              className='text-red-600'
              size="lg"
              label="Ngày đăng kí"
              id="registerDate"
              name="registerDate"
            />
            <Input
              readOnly={true}
              defaultValue={data.useage}
              className='text-red-600'
              size="lg"
              label="Mục đích sử dụng"
              id="usage"
              name="usage"
            />
            <Input
              readOnly={true}
              defaultValue={data.inspectionPlace}
              className='text-red-600'
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
