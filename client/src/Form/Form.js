import React, { useRef, useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
// import './Form.scss';
import axios from 'axios';
import { formRoute, createRegistationRoute } from '../utils/routes';
import { useReactToPrint } from 'react-to-print';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form({ user }) {
  const [data, useData] = useState({
    owner: 'Phúc Trần',
    plateNumber: '',
    registrationDate: '',
  });
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  const componentPDF = useRef();
  let handleOnblur = async (e) => {
    e.preventDefault();
    let value = document.querySelector('#plateNumber').value;
    let data = await axios.post(formRoute, { plateNumber: value });
    let formIfo = data.data.data;
    if (data.data.errCode === 0) {
      document.querySelector('#owner').value = formIfo.driverName;
      document.querySelector('#registrationDate').value =
        formIfo.registrationDate;
      document.querySelector('#expirationDate').value = formIfo.expirationDate;
      document.querySelector('#manufacturer').value = formIfo.manufacture;
      document.querySelector('#vehicleType').value = formIfo.model;
      document.querySelector('#color').value = formIfo.color;
      document.querySelector('#usage').value = formIfo.purpose;
      document.querySelector('#registerDate').value = formIfo.registerDate;
      // ten trung tam dang kiem
      document.querySelector('#inspectionPlace').value = user.name;
    }
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
  });
  let handleSubmit = async (e) => {
    e.preventDefault();
    let plateNumber = document.querySelector('#plateNumber').value;
    // ten trung tam dang kiem
    let name = 'Trung tâm đăng kiểm Hà Nội 1';
    let registrationDate = document.querySelector('#registrationDate').value;
    let expirationDate = document.querySelector('#expirationDate').value;
    console.log(`${plateNumber} ${name} ${registrationDate} ${expirationDate}`);
    let data = await axios.post(createRegistationRoute, {
      plateNumber: plateNumber,
      name: name,
      registrationDate: registrationDate,
      expirationDate: expirationDate,
    });
    toast.error('Đăng kiểm thành công', toastOptions);
    console.log(data);
  };
  // return (
  //   <>
  //     <div className="form-container">
  //       <h1>Điền vào Biểu mẫu</h1>
  //       <form onSubmit={(e) => handleSubmit(e)}>
  //         <div className="form-input-container">
  //           <div className="form-input">
  //             <label for="plateNumber">Biển số xe:</label>
  //             <input
  //               type="text"
  //               id="plateNumber"
  //               name="plateNumber"
  //               onBlur={(e) => handleOnblur(e)}
  //               required
  //             />
  //           </div>
  //           <div className="form-input">
  //             <label for="owner">Chủ sở hữu:</label>
  //             <input type="text" id="owner" name="owner" required />
  //           </div>
  //           <div className="form-input">
  //             <label for="registrationDate">Ngày đăng kiểm:</label>
  //             <input
  //               type="date"
  //               id="registrationDate"
  //               name="registrationDate"
  //               required
  //             />
  //           </div>
  //           <div className="form-input">
  //             <label for="expirationDate">Ngày hết hạn:</label>
  //             <input
  //               type="date"
  //               id="expirationDate"
  //               name="expirationDate"
  //               required
  //             />
  //           </div>
  //           <div className="form-input">
  //             <label for="manufacturer">Nhà sản xuất:</label>
  //             <input
  //               type="text"
  //               id="manufacturer"
  //               name="manufacturer"
  //               required
  //             />
  //           </div>
  //           <div className="form-input">
  //             <label for="vehicleType">Kiểu xe:</label>
  //             <input type="text" id="vehicleType" name="vehicleType" required />
  //           </div>
  //           <div className="form-input">
  //             <label for="color">Màu sắc:</label>
  //             <input type="text" id="color" name="color" required />
  //           </div>
  //           <div className="form-input">
  //             <label for="registerDate">Ngày đăng kí:</label>
  //             <input
  //               type="date"
  //               id="registerDate"
  //               name="registerDate"
  //               required
  //             />
  //           </div>
  //           <div className="form-input">
  //             <label for="usage">Mục đích sử dụng:</label>
  //             <input type="text" id="usage" name="usage" required />
  //           </div>
  //           <div className="form-input">
  //             <label for="inspectionPlace">Nơi đăng kiểm:</label>
  //             <input
  //               type="text"
  //               id="inspectionPlace"
  //               name="inspectionPlace"
  //               required
  //             />
  //           </div>
  //         </div>

  //         <div className="form-input-submit">
  //           <input type="submit" value="Submit" />
  //           <button onClick={generatePDF}>Print</button>
  //         </div>
  //       </form>

  //       <div className="print_container" ref={componentPDF}>
  //         <div className="container">
  //           <div className="section-title">HOÁ ĐƠN ĐĂNG KIỂM</div>
  //           <div className="content">
  //             <p>Biển đăng ký (License plate):</p>
  //             <p>Chủ sở hữu (Owner): {data.owner}</p>
  //             <p>Ngày đăng kiểm (Inspection Date): </p>
  //             <p>Ngày hết hạn (Expiration Date): </p>
  //             <p>Nhà sản xuất (Manufacturer): </p>
  //             <p>Kiểu xe (Vehicle type): </p>
  //             <p>Màu sắc (Color): </p>
  //             <p>Ngày đăng kí (Registration Date): </p>
  //             <p>Mục đích sử dụng (Purpose of use): </p>
  //             <p>Nơi đăng kiểm (Place of registration): </p>
  //           </div>
  //           <div className="sign">
  //             <div>
  //               <p>Chữ ký Trung tâm đăng kiểm</p>
  //               <i>(Ký và ghi rõ họ tên)</i>
  //             </div>
  //             <div>
  //               <p>Chữ ký chủ phương tiện</p>
  //               <i>(Ký và ghi rõ họ tên)</i>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <ToastContainer />
  //   </>
  // );
  return (
    <Card color="transparent" shadow={false} className='m-10'>
      <Typography variant="h2" color="blue">
        Điền vào biễu mẫu đăng kiểm xe
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nhập thông tin xe cần đăng kiểm
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-8 mb-2 w-full max-w-4xl mx-auto">
        <div className="mb-4 grid gap-10 grid-cols-1 md:grid-cols-2 w-full">
          <Input
            size="lg"
            label="Biển số xe"
            id="plateNumber"
            name='plateNumber'
            onBlur={(e) => handleOnblur(e)}
            required={true}
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Chủ sở hữu"
            id="owner"
            name='owner'
          />
          <Input
            readOnly={true}
            type='date'
            value=""
            size="lg"
            label="Ngày đăng kiểm"
            id="registrationDate"
            name='registrationDate'
          />
          <Input
            type='date'
            size="lg"
            label="Ngày hết hạn"
            id="expirationDate"
            name='expirationDate'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Nhà sản xuất"
            id="manufacturer"
            name='manufacturer'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Kiểu xe"
            id="vehicleType"
            name='vehicleType'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Màu sắc"
            id="color"
            name='color'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Ngày đăng kí"
            id="registerDate"
            name='registerDate'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Mục đích sử dụng"
            id="usage"
            name='usage'
          />
          <Input
            readOnly={true}
            value=""
            size="lg"
            label="Nơi đăng kiểm"
            id="inspectionPlace"
            name='inspectionPlace'
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
      <div className="print_container" ref={componentPDF}>
        <div className="container">
          <div className="section-title">HOÁ ĐƠN ĐĂNG KIỂM</div>
          <div className="content">
            <p>Biển đăng ký (License plate):</p>
            <p>Chủ sở hữu (Owner): {data.owner}</p>
            <p>Ngày đăng kiểm (Inspection Date): </p>
            <p>Ngày hết hạn (Expiration Date): </p>
            <p>Nhà sản xuất (Manufacturer): </p>
            <p>Kiểu xe (Vehicle type): </p>
            <p>Màu sắc (Color): </p>
            <p>Ngày đăng kí (Registration Date): </p>
            <p>Mục đích sử dụng (Purpose of use): </p>
            <p>Nơi đăng kiểm (Place of registration): </p>
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
    </Card>
  );
}


