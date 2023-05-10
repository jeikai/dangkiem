import React from 'react';
import "./Stats.scss"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useRef, useEffect, useState } from 'react';
import {
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
import RecentTable from '../RecentTable/RecentTable';
import { getStatsData, getUnexpiredData, getExpiredData } from '../utils/routes';



export default function ({ user }) {
  const [month_expired, setExpired] = useState([])
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
      const data = await axios.get(`${getStatsData}/${user.id}`);
      setExpired(data.data.month_expired);
    }
    Data();
  }, [user]);

  const chartData_2 = [];
  for (let i = 0; i < 12; i++) {
    chartData_2.push({
      name: 'Tháng' + (i + 1),
      'hết hạn': month_expired[i],
      amt: 2400,
    });
  }
  console.log(chartData_2)


  const data = [
    {
      label: "Chưa hết hạn",
      value: "html",
      desc: data2,
    },
    {
      label: "Sắp hết hạn",
      value: "react",
      desc: data3,
    },
  ];

  return (
    <div className="stats ">
      <div className="barchart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width="100%"
            height="100%"
            data={chartData_2}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hết hạn" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Tabs value="html">
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
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <RecentTable data={desc} />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );


}
