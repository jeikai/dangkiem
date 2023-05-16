import React, { useState, useRef } from 'react';
import { useTable } from 'react-table'
import { Card, Typography, Button } from "@material-tailwind/react";
import { useDownloadExcel } from 'react-export-table-to-excel'

function RecentTable({ data }) {

  const tableref = useRef(null)
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: 'regis-infor',
    sheet: 'regis-data'
  })

  console.log(data)

  const columns = React.useMemo(
    () => [
      {
        Header: "Biển số xe",
        accessor: "plateNumber",
      },
      {
        Header: "Địa chỉ",
        accessor: "address",
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <form>
      <Button className='mt-3 bg-indigo-300' onClick={onDownload}>Download data</Button>

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
    </form>
  );
}

export default RecentTable;