import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
//import "./Home.scss";
import RecentTable from "../RecentTable/RecentTable"
import axios from "axios";
import { getHistoryData } from "../utils/routes"
export default function ({ user }) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getHistoryData}/${user.id}`)
      console.log(regis.data.data)
      setData(regis.data.data)
    }
    Data()
  }, [user])
  console.log(data)
  return (
    <div className="p-10">
      <Typography variant="h2" color="blue" textGradient>
        <i className="fa-solid fa-clock-rotate-left  mr-3"></i>
        Đăng kiểm gần đây
      </Typography>
      <div className="table-container">
        <RecentTable data={data} />
      </div>
    </div>
  );
}
