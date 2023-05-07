import React from 'react';
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
import './Stats.scss';
import Table from '../RecentTable/RecentTable';
import Collapsible from './Collapsible/Collapsible';
import { getStatsData, getUnexpiredData, getExpiredData } from '../utils/routes';

export default function ({ user }) {
  const [month_expired, setExpired] = useState([])
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getExpiredData}/${user.id}`);
      console.log(regis.data.data)
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

  return (
    <div className="stats">
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

      <hr />

      <Collapsible label={'Xe chưa hết hạn đăng kiểm theo tháng/quý/năm'}>
        <div className="table-container">
          <Table className="stats-table" data={data2} />
        </div>
      </Collapsible>

      <hr />

      <Collapsible label={'Xe hết hạn'}>
        <div className="table-container">
          <Table className="stats-table" data={data3} />
        </div>
      </Collapsible>
    </div>
  );
}
