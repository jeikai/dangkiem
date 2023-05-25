import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {
  PieChart, Pie,
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
  const [month_expired, setExpired] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [registerByMonth, setregisterByMonth] = useState([])
  const [registerByQuy, setregisterByQuy] = useState([])
  const [registerByYear, setregisterByYear] = useState([])
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getExpiredData}/${user.id}`);
      setData3(regis.data.data);
    }
    Data();
  }, [user]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getUnexpiredData}/${user.id}`);
      setData2(regis.data.data);
    }
    Data();
  }, [user]);
  useEffect(() => {
    async function Data() {
      const serverdata = await axios.get(`${getStatsData}/${user.id}`);
      setregisterByMonth(serverdata.data.registerByMonth)
      setregisterByQuy(serverdata.data.registerByQuy)
      setregisterByYear(serverdata.data.registerByYear)
      setForecast(serverdata.data.forecast);
      setExpired(serverdata.data.month_expired);
    }
    Data();
  }, [user]);

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

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="barcharts w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Typography color='white' variant="h5" >Thống kê xe sắp hết hạn và dự báo lượng xe đăng kiểm theo tháng năm {new Date().getFullYear()}</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={dubao_saphethan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sắp hết hạn" fill="#8884d8" />
              <Bar dataKey="dự báo" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

        </div>
        <div>
          <Typography color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo năm</Typography>
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

        </div>
        <div>
          <Typography color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo quý</Typography>
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
        <div>
          <Typography color='white' variant="h5" >Thống kê xe đã được đăng kiểm theo tháng</Typography>
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

      </div>

      <Tabs value="html" className='w-full max-w-fit'>
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
                <Table columns={columns} propData={desc} token={token} />
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
}
