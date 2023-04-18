import React from "react";
import { useRef, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./Stats.scss";
import Table from "../Home/Table";
import Collapsible from "./Collapsible/Collapsible"
import data from "../data";

const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function () {
  const barRef = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      barRef.current = window.innerWidth;
      forceUpdate();
      //console.log(barRef.current);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [barRef.current]);

  function forceUpdate() {
    // force a re-render of the component by setting the state to the current state
    setState(prevState => ({ ...prevState }));
  }

  const [state, setState] = React.useState({}); // state used to force re-render

  return (
    <div className="stats">
      <div className="barchart" ref={barRef}>
        <BarChart width={barRef.current > 950 ? 900 : 375} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>


      <hr />

      <Collapsible label={'Xe chưa hết hạn đăng kiểm theo tháng/quý/năm'} >
        <div className="table-container">
          <Table className="stats-table" data={data} />
        </div>
      </Collapsible>

      <hr />

      <Collapsible label={'Xe sắp hết hạn'} >
        <div className="table-container">
          <Table className="stats-table" data={data} />
        </div>
      </Collapsible>
    </div>
  );
}
