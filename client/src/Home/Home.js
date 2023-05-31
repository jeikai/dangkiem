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
export default function ({ user, token }) {
  const tableref = useRef(null)
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: 'regis-infor',
    sheet: 'regis-data'
  })
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const regis = await axios.get(`${getHistoryData}/${user.id}`);
    console.log(regis.data.data);
    setData(regis.data.data);
  }
  useEffect(() => {
    fetchData();
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
        editable: true,
      },
      {
        Header: "Chủ sở hữu",
        accessor: "driverName",
        editable: false,
      },
      {
        Header: "Số điện thoại",
        accessor: "phoneNumber",
        editable: false,
      },
      {
        Header: "Biển số xe",
        accessor: "plateNumber",
        editable: false,
      },
      {
        Header: "Ngày hết hạn",
        accessor: "expireDate",
        editable: true,
      },
    ],
    []
  )
  return (
    <div className="p-10 max-w-fit mx-auto">
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
        <Table columns={columns} propData={data} token={token} fetchData={fetchData} />
      </div>
    </div>
  );
}
