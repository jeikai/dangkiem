import React from "react";
import { useRef, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import "./Stats.scss";
import Table from "../RecentTable/RecentTable";
import Collapsible from "./Collapsible/Collapsible"
import data from "../data";


function Time() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  let now = new Date(today)
  return now;
}
function Convert(a) {
  a *= 0.001
  a /= 3600
  a /= 24
  return a
}
let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let month_expired = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < data.length; i++) {
  let a = new Date(data[i].registered_date)
  for (let j = 0; j < 12; j++) {
    if (a.getMonth() + 1 == j + 1) {
      if (Convert(Time() - a) >= 365) {
        ++month_expired[j]
      } else {
        ++month[j]
      }
      break
    }
  }
}
const chartData_2 = []
for (let i = 0; i < 12; i++) {
  chartData_2.push({
    name: 'Tháng' + (i + 1),
    'chưa hết hạn': month[i],
    'hết hạn': month_expired[i],
    amt: 2400
  })
}


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

  const [state, setState] = React.useState({}); // state used to force re-render

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
