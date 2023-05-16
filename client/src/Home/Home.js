import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@material-tailwind/react';
//import "./Home.scss";
import Table from '../Table/Table';
import axios from 'axios';
import { getHistoryData } from '../utils/routes';
export default function ({ user }) {

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
      {
        Header: "ID",
        accessor: "id",
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
        Header: "Ngày đăng kiểm",
        accessor: "registerDate",
      },
      {
        Header: "Ngày hết hạn",
        accessor: "expireDate",
      },
    ],
    []
  )

  return (
    <div className="p-10">
      <Typography variant="h2" className="text-gray-100" textGradient>
        <i className="fa-solid fa-clock-rotate-left  mr-3"></i>
        Đăng kiểm gần đây
      </Typography>

      <div className="table-container">
        <Table columns={columns} propData={data} />
      </div>
    </div>
  );
}
