import React, { useRef, useState, useEffect } from 'react';
import {
  Carousel,
  Typography,
  Select, Option
} from "@material-tailwind/react";
import {
  PieChart, Pie, Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import { getHistoryDataCucDangKiem, getStatsData } from '../utils/routes';
import Table from '../Table/Table';

export default function HomeAdmin({ user }) {
  const [data, setData] = useState([]);

  const [selected, setSelected] = React.useState(null);

  const [tableData, setTableData] = React.useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(getHistoryDataCucDangKiem);
      console.log(regis.data.data);
      setData(regis.data.data);
      // setTableData(regis.data.data[0].slice(1));
    }
    Data();
  }, []);
  // data bieu do tron so luong dkiem cua cac trung tam
  const randomColors = ['#C437DD', '#DCB897', '#89F367', '#7BDACF', '#23B2D3', '#F7A985', '#C05CB6', '#76596D', '#7E4F75', '#C41638', '#C71440', '#32D3D3', '#BD0351', '#682B2A', '#41CD27', '#616584', '#225DF1', '#50B455', '#42E0F1', '#C51F6C', '#702E58', '#AA07CB', '#38FDD6', '#BF7BAD', '#F5C0D4', '#BE62CE', '#298260', '#A0420C', '#F9C13F', '#99780E']
  const chartData = data.map(item => {
    return { name: item[0].name, value: item.length - 1 }
  })
  // lay data cho bieu do cua tung trung tam
  const [month_expired, setExpired] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [registerByMonth, setregisterByMonth] = useState([])
  const [registerByQuy, setregisterByQuy] = useState([])
  const [registerByYear, setregisterByYear] = useState([])
  //----------------------------
  const setSelectedItem = (value) => {
    setSelected(value);
    async function Data() {
      const serverdata = await axios.get(`${getStatsData}/${data[value][0]["id"]}`);
      setregisterByMonth(serverdata.data.registerByMonth)
      setregisterByQuy(serverdata.data.registerByQuy)
      setregisterByYear(serverdata.data.registerByYear)
      setForecast(serverdata.data.forecast);
      setExpired(serverdata.data.month_expired);
    }
    Data();
  }

  const dubao_saphethan = [];
  for (let i = 0; i < 12; i++) {
    dubao_saphethan.push({
      name: 'Tháng' + (i + 1),
      'dự báo': forecast[i],
      'Sắp hết hạn': month_expired[i],
      amt: 2400,
    });
  }
  const DK_thang = [];
  for (let i = 0; i < registerByMonth.length; i++) {
    DK_thang.push({
      name: registerByMonth[i][0],
      'Đã đăng ký': registerByMonth[i][1],
      amt: 2400,
    });
  }
  const DK_quy = [];
  for (let i = 0; i < registerByQuy.length; i++) {
    DK_quy.push({
      name: registerByQuy[i][0],
      'Đã đăng ký': registerByQuy[i][1],
      amt: 2400,
    });
  }
  const dangkiem_nam = [];
  for (let i = 0; i < registerByYear.length; i++) {
    dangkiem_nam.push({
      name: registerByYear[i][0],
      value: registerByYear[i][1],
      amt: 2400,
    });
  }

  const columns = React.useMemo(
    () => [
      // {
      //   Header: "ID",
      //   accessor: "carId",
      // },
      {
        Header: "Ngày đăng kiểm",
        accessor: "registerDate", // accessor is the "key" in the data
      },
      {
        Header: "Chủ sở hữu",
        accessor: "driverName",
      },
      {
        Header: "Số điện thoại",
        accessor: "phoneNumber",
      },
      {
        Header: "Biển số xe",
        accessor: "plateNumber",
      },
      {
        Header: "Ngày hết hạn",
        accessor: "expireDate", // accessor is the "key" in the data
      },
    ],
    []
  )
  console.log(chartData)
  return (
    <div className="admin-home max-w-fit mx-auto">

      <div className="centers flex flex-col justify-center items-center" >

        <div className="m-4 h-56 w-full">
          <Typography className='p-2 text-center' color='white' variant="h5" >Thống kê số lượng xe đã được đăng kiểm theo từng trung tâm</Typography>
          <div style={{ width: '99%', height: '100%' }}>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart width="100%" height="100%">
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((item, index) => {
                    return (
                      <Cell key={`cell-${index}`} fill={randomColors[index]} />
                    )
                  })}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className=' w-full max-w-7xl h-full m-10' >
          <div className='w-11/12 max-w-4xl ml-10 mb-10'>
            <Select className="bg-blue-gray-50/10 text-gray-50 p-4 w-full" size='lg' label='Chọn trung tâm đăng kiểm'>
              {data.map((item, index) => {
                return (
                  <Option onClick={() => {
                    setSelectedItem(index);
                    setTableData(data[index].slice(1))
                  }}>
                    {item[0].name}
                  </Option>

                )
              })}
            </Select>

          </div>

          <div className='charts'>
            {selected != null && <Carousel className="rounded-xl w-full h-96 bg-black/40 my-2">
              <div className='p-1 flex flex-col justify-center items-center'>
                <Typography className='p-2 text-center' color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo tháng</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart width="100%" height="100%" data={DK_thang}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Đã đăng ký" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className='p-1 flex flex-col justify-center items-center'>
                <Typography className='p-2 text-center' color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo quý</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart width="100%" height="100%" data={DK_quy}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Đã đăng ký" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className='p-1 flex flex-col justify-center items-center'>
                <Typography className='p-2 text-center' color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo năm</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart width="100%" height="100%">
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={dangkiem_nam}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

              </div >
              <div className='p-1 flex flex-col justify-center items-center'>
                <Typography className='p-2 text-center' color='white' variant="h5" >Thống kê xe sắp hết hạn và dự báo lượng xe đăng kiểm theo tháng năm {new Date().getFullYear()}</Typography>
                <ResponsiveContainer width="100%" height={250} >
                  <BarChart width="100%" height="100%" data={dubao_saphethan}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sắp hết hạn" fill="#4890F8" />
                    <Bar dataKey="dự báo" fill="#A663EA" />
                  </BarChart>
                </ResponsiveContainer>

              </div>

            </Carousel>}
          </div>

          {selected != null && <Table columns={columns} propData={tableData} admin={true} />}
        </div>
      </div>
    </div>
  );
}
