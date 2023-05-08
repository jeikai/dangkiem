import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import "./HomeAdmin.scss";


import Table from "../RecentTable/RecentTable";
import Collapsible from "../Stats/Collapsible/Collapsible"
import mockData from "../data.js";

export default function HomeAdmin() {

  const centersList = [{ name: 'trung tam 1', id: 1 }, { name: 'trung tam 2', id: 2 }, { name: 'trung tam 3', id: 3 }];
  let Centers = centersList.map((data) => {
    return (
      <div>
        <Collapsible label={data.name} >
          <div className="table-container">
            <Table className="stats-table" data={mockData} />
          </div>
        </Collapsible>

        <hr />
      </div>
    )
  })

  const data01 = [
    { name: 'Hà Nội 1', value: 400 },
    { name: 'Đà Nẵng', value: 300 },
    { name: 'Thanh Hoá', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
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
              data={data01}
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
          <h1>Danh sách các trung tâm đăng kiểm</h1>
        </div>

        <div>
          {Centers}
        </div>
      </div>
    </div>
  );
}
