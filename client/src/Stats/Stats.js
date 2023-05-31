import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import Table from '../Table/Table';
import {
  getStatsData,
  getUnexpiredData,
  getExpiredData,
} from '../utils/routes';

export default function ({ user, token }) {
  const [dubaoSaphethan, setDubao_Saphethan] = useState([]);
  const [registerByMonth, setregisterByMonth] = useState([]);
  const [registerByQuy, setregisterByQuy] = useState([]);
  const [registerByYear, setregisterByYear] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const fetchData = async () => {
    // Lấy ra dữ liệu sắp hết hạn
    const regis3 = await axios.get(`${getExpiredData}/${user.id}`);
    setData3(regis3.data.data);

    // Lấy ra dữ liệu chưa hết hạn
    const regis2 = await axios.get(`${getUnexpiredData}/${user.id}`);
    setData2(regis2.data.data);

    // Lấy dữ liệu thống kê cho biểu đồ
    const serverdata = await axios.get(`${getStatsData}/${user.id}`);
    console.log(serverdata);
    setregisterByMonth(serverdata.data.registerByMonth);
    setregisterByQuy(serverdata.data.registerByQuy);
    setregisterByYear(serverdata.data.registerByYear);
    setDubao_Saphethan(serverdata.data.dubao_saphethan);
  };
  useEffect(() => {
    fetchData();
  }, [user]);
  const data = [
    {
      label: 'Chưa hết hạn',
      value: 'html',
      desc: data2,
    },
    {
      label: 'Sắp hết hạn',
      value: 'react',
      desc: data3,
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'Chủ sở hữu',
        accessor: 'driverName',
      },
      {
        Header: 'Số điện thoại',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Biển số xe',
        accessor: 'plateNumber',
      },
      {
        Header: 'Ngày đăng kiểm',
        accessor: 'registerDate',
      },
      {
        Header: 'Ngày hết hạn',
        accessor: 'expireDate',
      },
    ],
    []
  );
  // Mã giao diện
  return (
    <div className="p-1 md:p-10 flex flex-col items-center max-w-screen-xl mx-auto">
      <Carousel className="rounded-xl w-full h-96 bg-black/40 my-2">
        <div className="p-1 flex flex-col justify-center items-center">
          <Typography className="p-2 text-center" color="white" variant="h5">
            Thống kê xe sắp hết hạn và dự báo lượng xe đăng kiểm theo tháng năm{' '}
            {new Date().getFullYear()}
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={dubaoSaphethan}>
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
        <div className="p-1 flex flex-col justify-center items-center">
          <Typography className="p-2 text-center" color="white" variant="h5">
            Thống kê xe đã được đăng kiểm theo năm
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart width="100%" height="100%">
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={registerByYear}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="p-1 flex flex-col justify-center items-center">
          <Typography className="p-2 text-center" color="white" variant="h5">
            Thống kê xe đã được đăng kiểm theo quý
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={registerByQuy}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Đã đăng ký" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-1 flex flex-col justify-center items-center">
          <Typography className="p-2 text-center" color="white" variant="h5">
            Thống kê xe đã được đăng kiểm theo tháng
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={registerByMonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Đã đăng ký" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Carousel>

      <Tabs value="html" className="w-full max-w-fit">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => {
            return (
              <TabPanel key={value} value={value}>
                <Table columns={columns} propData={desc} token={token} fetchData={fetchData} />
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
}
