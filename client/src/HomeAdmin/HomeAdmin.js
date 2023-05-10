import React from "react";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import "./HomeAdmin.scss";


import RecentTable from "../RecentTable/RecentTable";
import mockData from "../data.js";

export default function HomeAdmin() {

  const data01 = [
    { label: 'Hà Nội 1', value: "hanoi", desc: "ban lay data table cua tung trung tam" },
    { label: 'Đà Nẵng', value: "danang", desc: "ban lay data table cua tung trung tam" },
    { label: 'Thanh Hoá', value: "thanhhoa", desc: "ban lay data table cua tung trung tam" },
  ];
  const data011 = [
    { key: 'Hà Nội 1', value: 400, },
    { key: 'Đà Nẵng', value: 500 },
    { key: 'Thanh Hoá', value: 600 },
  ];



  return (
    <div className="admin-home">
      <div className="chart-header">

      </div>
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
            {data01.map(({ label, value }) => (
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
            {data01.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
