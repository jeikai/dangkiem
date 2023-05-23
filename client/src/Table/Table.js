import React, { useRef, useState } from 'react';
import { Card, Typography, Select, Option } from '@material-tailwind/react';
import {
  Button,
  CardBody,
  CardFooter,
  Input,
} from '@material-tailwind/react';
import { useTable, useFilters, usePagination, useSortBy } from 'react-table';
import { deleteRegister, updateRegister } from '../utils/routes';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Table({ columns, propData, admin = false }) {
  const data = React.useMemo(() => propData);
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

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
      initialState: {
        pageIndex: 0,
        sortBy: [{ id: 'registerDate', desc: true }],
      },
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters, // useFilters!
    useSortBy,
    usePagination
  );

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
  };
  const handleDelete = async (id) => {
    const data = await axios.delete(`${deleteRegister}/${id}`);
    toast.success('Xoá thành công', toastOptions);
  };
  const handleUpdate = async (id) => {
    if (handleValidation()) {
      const data = await axios.put(`${updateRegister}/${id}`, selectedRegis);
      toast.success(data.data.errMessage, toastOptions);
    }
  };
  const handleValidation = () => {
    if (
      !selectedRegis.id ||
      !selectedRegis.driverName ||
      !selectedRegis.plateNumber ||
      !selectedRegis.registerDate ||
      !selectedRegis.phoneNumber ||
      !selectedRegis.expireDate
    ) {
      toast.error('Không được để trống', toastOptions);
      return false;
    }
    return true;
  };
  console.log(selectedRegis);
  const handleChange = (event) => {
    setSelectedRegis({
      ...selectedRegis,
      [event.target.name]: event.target.value,
    });
    console.log(selectedRegis.id);
  };
  const dialogRef = useRef(null);
  return (
    <div>
      <div className="w-500px">
        <dialog
          ref={dialogRef}
          className="mx-auto bg-transparent"
        >
          <div>
            <Card className="w-full max-w-[24rem] ">
              <Typography variant="h3" color="Blue" className="p-10">
                Chỉnh sửa lượt đăng kiểm
              </Typography>
              <CardBody className="flex flex-col gap-4">
                {columns.map((item) => {
                  const key = item.Header;
                  const value = item.accessor;
                  return (
                    <Input
                      label={key}
                      size="lg"
                      name={value}
                      defaultValue={selectedRegis[value]}
                      onChange={(e) => handleChange(e)}
                    />
                  );
                })}
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  fullWidth
                  onClick={() => handleUpdate(selectedRegis.id)}
                >
                  Sửa lượt đăng kiểm này
                </Button>

                <Button
                  variant="gradient"
                  color="red"
                  fullWidth
                  className='mt-2'
                  onClick={() => handleDelete(selectedRegis.id)}
                >
                  Xoá lượt đăng kiểm này
                </Button>
                <div className="flex justify-end mt-3">
                  <Button onClick={() => dialogRef.current.close()}>Đóng</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </dialog>
      </div>
      <Card className="overflow-scroll h-full w-full">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              const isLast = index === data.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';
              return (
                <tr
                  {...row.getRowProps()}
                  className="hover:cursor-pointer hover:bg-blue-gray-50/50"
                  onClick={() => {
                    if (admin == false) {
                      handleClickRegis(row.original);
                    }
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td className={classes} {...cell.getCellProps()}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {cell.render('Cell')}
                        </Typography>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination p-2">
          <button
            className="p-2 hover:bg-blue-gray-50"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>{' '}
          <button
            className="p-2 hover:bg-blue-gray-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>{' '}
          <button
            className="p-2 hover:bg-blue-gray-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>{' '}
          <button
            className="p-2 hover:bg-blue-gray-50"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>{' '}
          <span className="p-2 hover:bg-blue-gray-50">
            Trang{' '}
            <strong>
              {pageIndex + 1} / {pageOptions.length}
            </strong>{' '}
          </span>
          <span className="p-2 hover:bg-blue-gray-50">
            | Đến trang:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Hiện {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
}
