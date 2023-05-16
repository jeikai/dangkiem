import React, { useRef, useState } from 'react';
import { Card, Typography, Select, Option } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import { useTable, useFilters, usePagination, useSortBy } from 'react-table'

export default function Table({ columns, propData }) {
  const data = React.useMemo(
    () => propData
  )


  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length

    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, sortBy: [{ id: 'registerDate', desc: true }] },
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters, // useFilters!
    useSortBy,
    usePagination,
  )


  const [open, setOpen] = React.useState(false);
  const [selectedRegis, setSelectedRegis] = useState(() => {
    const initialState = {};

    columns.forEach((column) => {
      initialState[column.accessor] = '';
    });

    return initialState;
  });
  const handleClickRegis = (rowData) => {

    setSelectedRegis(rowData);

    dialogRef.current.showModal();
  }


  const dialogRef = useRef(null)
  return (
    <div >
      <div className='w-500px'>

        <dialog ref={dialogRef} className='rounded-lg'>
          <Card className="mx-auto w-full max-w-[24rem]">

            <Typography variant="h3" color="Blue" className='p-10'>
              Chỉnh sửa lượt đăng kiểm
            </Typography>
            <CardBody className="flex flex-col gap-4">
              {columns.map(item => {
                const key = item.Header;
                const value = item.accessor
                return (
                  <Input label={key} size="lg" defaultValue={selectedRegis[value]} />
                )
              })}
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sửa lượt đăng kiểm này
              </Button>
              <div className='flex justify-center bg-red-600/50 rounded-lg my-2 p-2'>
                <Typography
                  as="a"
                  href="#remove-regis"
                  variant="small"
                  color="red"
                  className="ml-1 font-bold"
                >
                  Xoá lượt đăng kiểm này
                </Typography>
              </div>
              <div className='flex justify-end'>
                <Button onClick={() => dialogRef.current.close()}>Đóng</Button>
              </div>
            </CardFooter>
          </Card>
        </dialog>

      </div>
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
                    {/* Render the columns filter UI */}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr {...row.getRowProps()} className='hover:cursor-pointer hover:bg-blue-gray-50/50'
                  onClick={() => {
                    handleClickRegis(row.original);
                  }}
                >
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
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div className="pagination p-2">
          <button className='p-2 hover:bg-blue-gray-50' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button className='p-2 hover:bg-blue-gray-50' onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button className='p-2 hover:bg-blue-gray-50' onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button className='p-2 hover:bg-blue-gray-50' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span className='p-2 hover:bg-blue-gray-50'>
            Trang{' '}
            <strong>
              {pageIndex + 1} / {pageOptions.length}
            </strong>{' '}
          </span>
          <span className='p-2 hover:bg-blue-gray-50'>
            | Đến trang:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}

          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Hiện {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Card>
    </div>
  )
}