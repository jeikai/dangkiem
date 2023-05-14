import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@material-tailwind/react';
//import "./Home.scss";
import RecentTable from '../RecentTable/RecentTable';
import axios from 'axios';
import { getHistoryData } from '../utils/routes';
import { useDownloadExcel } from 'react-export-table-to-excel'
export default function ({ user }) {
  const tableref = useRef(null)

  const {onDownload} = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: 'regis-infor',
    sheet: 'regis-data'
  })
  const [data, setData] = useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getHistoryData}/${user.id}`);
      console.log(regis.data.data);
      setData(regis.data.data);
    }
    Data();
  }, [user]);
  console.log(data);
  return (
    <div className="p-10">
      <Typography variant="h2" color="blue" textGradient>
        <i className="fa-solid fa-clock-rotate-left  mr-3"></i>
        Đăng kiểm gần đây
      </Typography>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={onDownload}>
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download data</span>
      </button>
      <div className="table-container">
        <RecentTable data={data} print={tableref}/>
      </div>
    </div>
  );
}
