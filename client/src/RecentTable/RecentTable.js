import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
//import './RecentTable.scss';

function RecentTable({ data }) {
  const [plateSearch, setPlateSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');

  const TABLE_HEAD = ["ID", "Biển số xe", "Ngày đăng kiểm", "Ngày hết hạn", "Nơi đăng kiểm", ""];

  let TABLE_ROWS = data
    .filter((item) => {
      return placeSearch === ''
        ? item
        : item['User.address'].toLowerCase().includes(placeSearch.toLowerCase());
    })
    .filter((item) => {
      // console.log("item['Car.plateNumber']");
      // console.log(item['Car.plateNumber']);
      // console.log(typeof (item['Car.plateNumber']));
      return plateSearch === ''
        ? item
        : item['Car.plateNumber'].includes(plateSearch.toUpperCase());
    })
    .filter((item) => {
      return dateSearch === ''
        ? item
        : item.registerDate.toLowerCase().includes(dateSearch.toLowerCase());
    })
  console.log(data)
  return (
    <form>
      <div className="mt-10 flex flex-col lg:flex-row gap-2">
        <Input
          variant="outlined"
          label="Tìm kiếm theo biển số xe"
          onChange={(e) => setPlateSearch(e.target.value)}
          className='' />
        <Input
          variant="outlined"
          label="Tìm kiếm theo ngày đăng kiểm"
          onChange={(e) => setDateSearch(e.target.value)}
          className='' />
        <Input
          variant="outlined"
          label="Tìm kiếm theo nơi đăng kiểm"
          onChange={(e) => setPlaceSearch(e.target.value)}
          className='' />

      </div>

      <Card className='overflow-scroll h-full w-full mt-6'>
        <table className="w-full min-w-max table-auto text-left" >
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((data, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={data.carId}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.carId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data["Car.plateNumber"]}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.registerDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.expireDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data['User.address']}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                      Sửa lượt đăng kiểm
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </Card>



    </form>
  );
}

export default RecentTable;