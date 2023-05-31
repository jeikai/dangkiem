import React, { Fragment, useRef, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Dialog, Transition } from '@headlessui/react'
import {
  Button,
  Input,
} from '@material-tailwind/react';
import { useTable, useFilters, usePagination, useSortBy } from 'react-table';
import { deleteRegister, updateRegister } from '../utils/routes';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Table({ columns, propData, admin = false, token, fetchData }) {
  const data = React.useMemo(() => propData);
  //Cài đặt cho thông báo
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
  const cancelButtonRef = useRef(null)

  const [selectedRegis, setSelectedRegis] = useState(() => {
    const initialState = {};

    columns.forEach((column) => {
      initialState[column.accessor] = '';
    });

    return initialState;
  });
  const handleClickRegis = (rowData) => {
    setSelectedRegis(rowData);
    setOpen(true)
  };
  //Hàm xoá đi bản ghi đăng kiểm
  const handleDelete = async (id) => {
    const data = await axios.delete(`${deleteRegister}/${id}`);
    toast.success('Xoá thành công', toastOptions);
    fetchData();
    setOpen(false);
  };
  //Hàm cập nhập đăng kiểm
  const handleUpdate = async (id) => {
    if (handleValidation()) {
      const data = await axios.put(`${updateRegister}/${id}`, { selectedRegis, token: token });
      toast.success(data.data.errMessage, toastOptions);
      fetchData();
      setOpen(false);
    }
  };
  //Hàm validate không để trống giá trị nào
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
  //Hàm thay đổi giá trị theo input nhập từ bàn phím
  const handleChange = (event) => {
    setSelectedRegis({
      ...selectedRegis,
      [event.target.name]: event.target.value,
    });
    console.log(selectedRegis.id);
  };
  //Mã giao diện
  return (
    <div>
      <div className="w-500px">
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div >
                        <Typography variant="h3" color="blue" className="pb-10 flex justify-center">
                          Chỉnh sửa lượt đăng kiểm
                        </Typography>
                        <div className="flex flex-col gap-4">
                          {columns.map((item) => {
                            const key = item.Header;
                            const value = item.accessor;
                            const editable = item.editable;
                            return (
                              <Input
                                label={key}
                                readOnly={!editable}
                                color={editable ? 'blue' : 'gray'}
                                type={editable ? 'date' : 'text'}
                                size="lg"
                                name={value}
                                defaultValue={selectedRegis[value]}
                                onChange={(e) => handleChange(e)}
                              />
                            );
                          })}
                        </div>
                        <Button
                          className='mt-10'
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
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                      <button
                        type="button"
                        className="mt-1 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Đóng
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

      </div>
      <Card className="overflow-scroll h-full w-full">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="border-b border-blue-gray-100 bg-blue-gray-50 w-auto md:p-4"
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
