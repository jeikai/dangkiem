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

  // Khởi tạo file excel cho chức năng export data
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: 'regis-infor',
    sheet: 'regis-data'
  })
  const [data, setData] = useState([]);

  //Hàm call API dữ liệu
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(`${getHistoryData}/${user.id}`);
      console.log(regis.data.data);
      setData(regis.data.data);
    }
    Data();
  }, [user]);
  //Hàm set giá trị cho table head và truy cập đến các giá trị trong bản ghi
  const columns = React.useMemo(
    () => [
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
  //Mã giao diện
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
        <Table columns={columns} propData={data} token={token} />
      </div>
    </div>
  );
}
