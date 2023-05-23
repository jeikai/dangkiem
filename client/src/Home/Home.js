import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@material-tailwind/react';
import {
  Button,
} from '@material-tailwind/react';
import axios from 'axios';
import { getHistoryData } from '../utils/routes';
import { useDownloadExcel } from 'react-export-table-to-excel'
import Print from '../Table/Export';
import Table from '../Table/Table';
import Chatbot from '../Chatbot/Chatbot';
export default function ({ user }) {
  const tableref = useRef(null)
  const { onDownload } = useDownloadExcel({
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

  const columns = React.useMemo(
    () => [
      // {
      //   Header: "ID",
      //   accessor: "id",
      // },
      {
        Header: "Ngày đăng kiểm",
        accessor: "registerDate",
      },
      {
        Header: "Chủ sở hữu",
        accessor: "driverName",
      },
      {
        Header: "Số điện thoại",
        accessor: "phoneNumber",
      },
      {
        Header: "Biển số xe",
        accessor: "plateNumber",
      },
      {
        Header: "Ngày hết hạn",
        accessor: "expireDate",
      },
    ],
    []
  )
  return (
    <div className="p-10 max-w-fit mx-auto">
      <Chatbot />
      <Typography variant="h2" className="text-gray-100" textGradient>
        <i className="fa-solid fa-clock-rotate-left  mr-3"></i>
        Đăng kiểm gần đây
      </Typography>
      <Button
        variant="gradient"
        onClick={onDownload}
        className='my-1'
      >
        Tải xuống dữ liệu
      </Button>
      <div className="table-container">
        <Print print={tableref} columns={columns} propData={data}></Print>
        <Table columns={columns} propData={data} />
      </div>
    </div>
  );
}
