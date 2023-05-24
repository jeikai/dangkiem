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
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getExpiredData}/${user.id}`);
      // console.log(regis.data.data)
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
      setForecast(serverdata.data.forecast);
      setExpired(serverdata.data.month_expired);
    }
    Data();
  }, [user]);

  const chartData_2 = [];
  for (let i = 0; i < 12; i++) {
    chartData_2.push({
      name: 'Tháng' + (i + 1),
      'dự báo': forecast[i],
      'hết hạn': month_expired[i],
      amt: 2400,
    });
  }
  const chartData_3 = [];
  for (let i = 0; i < 4; i++) {
    let dubao = forecast[i * 3] + forecast[i * 3 + 1] + forecast[i * 3 + 2];
    let hethan = month_expired[i * 3] + month_expired[i * 3 + 1] + month_expired[i * 3 + 2]
    chartData_3.push({
      name: 'Quý' + (i + 1),
      'dự báo': dubao,
      'hết hạn': hethan,
      amt: 2400,
    });
    // i = i*3 - 1
  }
  const data = [
    {
      label: 'Chưa hết hạn',
      value: 'html',
      desc: data2,
    },
    {
      label: 'Hết hạn',
      value: 'react',
      desc: data3,
    },
  ];

  const dangkiem_nam = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];




  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
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
          <Typography color='white' variant="h5" >Danh sách xe đã được đăng kiểm, sắp hết hạn đăng kiểm theo tháng</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={chartData_2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hết hạn" fill="#8884d8" />
              <Bar dataKey="dự báo" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

        </div>
        <div>
          <Typography color='white' variant="h5" >Danh sách xe đã được đăng kiểm theo năm</Typography>
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
          <Typography color='white' variant="h5" >Danh sách xe đã được đăng kiểm theo quý</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={chartData_3}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hết hạn" fill="#8884d8" />
              <Bar dataKey="dự báo" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <Typography color='white' variant="h5" >Dự báo số lượng xe sẽ đăng kiểm lại, đăng kiểm mới theo tháng</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width="100%" height="100%" data={chartData_2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hết hạn" fill="#8884d8" />
              <Bar dataKey="dự báo" fill="#82ca9d" />
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
