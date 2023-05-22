import React, { useRef, useState, useEffect } from 'react';
import {
  Typography,
  Select, Option
} from "@material-tailwind/react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { getHistoryDataCucDangKiem } from '../utils/routes';
import Table from '../Table/Table';

export default function HomeAdmin({ user }) {

  const [data, setData] = useState([]);

  const [selected, setSelected] = React.useState(0);
  const setSelectedItem = (value) => setSelected(value);
  const [tableData, setTableData] = React.useState([]);
  useEffect(() => {
    async function Data() {
      const regis = await axios.get(getHistoryDataCucDangKiem);
      console.log(regis.data.data);
      setData(regis.data.data);
      setTableData(regis.data.data[0].slice(1));
    }
    Data();
  }, []);

  const chartData = data.map(item => {
    return { name: item[0].name, value: item.length - 1 }
  })

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "carId",
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
        accessor: "registerDate", // accessor is the "key" in the data
      },
      {
        Header: "Ngày hết hạn",
        accessor: "expireDate", // accessor is the "key" in the data
      },
    ],
    []
  )

  return (
    <div className="admin-home">


      <div className="centers flex flex-col justify-center items-center" >
        <div className="centers-header p-10">
          <Typography variant="h2" className="text-gray-100" textGradient>
            Danh sách các trung tâm đăng kiểm
          </Typography>
        </div>

        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%">
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className=' w-full max-w-7xl h-full m-10' >
          <div className='w-11/12 max-w-4xl ml-10 mb-10'>
            <Select className="bg-blue-gray-50/10 text-gray-50 p-4 w-full" size='lg' label='Chọn trung tâm đăng kiểm'>
              {data.map((item, index) => {
                return (
                  <Option onClick={() => {
                    setSelectedItem(index);
                    setTableData(data[index].slice(1))
                  }}>
                    {item[0].name}
                  </Option>

                )
              })}
            </Select>

          </div>


          <Table columns={columns} propData={tableData} />
        </div>
      </div>
    </div>
  );
}
