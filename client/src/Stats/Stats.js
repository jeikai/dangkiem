import React from "react";
import { useRef, useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import "./Stats.scss";
import Table from "../RecentTable/RecentTable";
import Collapsible from "./Collapsible/Collapsible"
import data from "../data";
import { getStatsData } from "../utils/routes";

export default function ({ user }) {
  const [month_unexpired, setUnexpired] = useState([])
  const [month_expired, setExpired] = useState([])


  useEffect(() => {
    async function Data() {
      const data = await axios.get(`${getStatsData}/${user.id}`)
      setUnexpired(data.data.month_unexpired)
      setExpired(data.data.month_expired)
    }
    Data()
  }, [user])

  console.log(month_expired, month_unexpired)
  const chartData_2 = []
  for (let i = 0; i < 12; i++) {
    chartData_2.push({
      name: 'Tháng' + (i + 1),
      'chưa hết hạn': month_unexpired[i],
      'hết hạn': month_expired[i],
      amt: 2400
    })
  }
  const barRef = useRef(window.innerWidth);
  const [state, setState] = React.useState({}); // state used to force re-render
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      barRef.current = currentWidth;
      setState(prevState => ({ ...prevState })); // trigger re-render
    };
    handleResize(); // set initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    async function Data() {
      const data = await axios.get()
    }
    Data()
  }, [])
  function forceUpdate() {
    // force a re-render of the component by setting the state to the current state
    setState(prevState => ({ ...prevState }));
  }


  return (
    <div className="stats">
      <div className="barchart" ref={barRef}>
        <BarChart width={barRef.current > 950 ? 900 : 375} height={350} data={chartData_2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hết hạn" fill="#8884d8" />
          <Bar dataKey="chưa hết hạn" fill="#82ca9d" />
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
