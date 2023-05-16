import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";


import { useTable } from 'react-table'

export default function AdminTable({ propData }) {
  const data = React.useMemo(
    () => propData
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "Tên trung tâm",
        accessor: "name",
      },
      {
        Header: "Địa chỉ",
        accessor: "address",
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Card className="overflow-scroll h-full w-full">

      <table {...getTableProps()} className='w-full'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  {...column.getHeaderProps()}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {column.render('Header')}
                  </Typography>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className={classes}
                      {...cell.getCellProps()}
                    >
                      <Typography variant="small" color="blue-gray" className="font-normal">

                        {cell.render('Cell')}
                      </Typography>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}