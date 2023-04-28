import React, {useEffect, useState} from "react";
import "./Home.scss";
import RecentTable from "../RecentTable/RecentTable"
import axios from "axios";
import { getHistoryData } from "../utils/routes"
export default function ({user}) {
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
    <div className="recent">
      <div className="recent-header">
        <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse fa-2xl"></i>
        <h1>Đăng kiểm gần đây</h1>
      </div>
      <div className="table-container">
        <RecentTable data={data} />
      </div>
    </div>
  );
}
