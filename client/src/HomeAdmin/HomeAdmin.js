import React, { useState, useEffect } from 'react';
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './HomeAdmin.scss';
import { getHistoryDataCucDangKiem } from '../utils/routes';
import RecentTable from '../RecentTable/RecentTable';

export default function HomeAdmin({ user }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(getHistoryDataCucDangKiem);
      console.log(regis.data.data);
      setData(regis.data.data);
    }
    Data();
  }, []);
  const data01 = [
    {
      label: 'Hà Nội 1',
      value: 'hanoi',
      desc: 'ban lay data table cua tung trung tam',
    },
    {
      label: 'Đà Nẵng',
      value: 'danang',
      desc: 'ban lay data table cua tung trung tam ta',
    },
    {
      label: 'Thanh Hoá',
      value: 'thanhhoa',
      desc: 'ban lay data table cua tung trung tam',
    },
  ];
  const data011 = [
    { key: 'Hà Nội 1', value: 400 },
    { key: 'Đà Nẵng', value: 500 },
    { key: 'Thanh Hoá', value: 600 },
  ];
  
  return (
    <div className="admin-home">
      <div className="barchart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data011}
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

      <div className="centers">
        <div className="centers-header">
          <Typography variant="h2" color="blue" textGradient>
            Danh sách các trung tâm đăng kiểm
          </Typography>
        </div>

        <Tabs value="hanoi">
          <TabsHeader>
            {data.map((data) => (
              <Tab key={data[0].id} value={data[0].id}>
                {data[0].name}
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
            {data.map(( data) => (
              <TabPanel key={data[0].id} value={data[0].id}>
                {"Hello"}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
