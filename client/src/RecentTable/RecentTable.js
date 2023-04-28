import React, { useState } from 'react';
import './RecentTable.scss';

function RecentTable({data}) {
  const [plateSearch, setPlateSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');

  let TableLine = data
    .filter((item) => {
      return placeSearch.toLowerCase() === ''
        ? item
        : item.place.toLowerCase().includes(placeSearch);
    })
    .filter((item) => {
      return plateSearch.toLowerCase() === ''
        ? item
        : item.plate_number.toLowerCase().includes(plateSearch);
    })
    .filter((item) => {
      return dateSearch.toLowerCase() === ''
        ? item
        : item.registered_date.toLowerCase().includes(dateSearch);
    })
    .map((data) => {
      return (
        <tr key={data.carId}>
          <td>{data.carId}</td>
          {/* <td>{data.Car.plateNumber}</td> */}
          <td>{data.registerDate}</td>
          {/* <td>{data.User.address}</td> */}
        </tr>
      );
    });
  console.log(data);

  return (
    <form>
      <div className="search_group">
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setPlateSearch(e.target.value.toLowerCase())}
          placeholder="Tìm kiếm theo biển số xe"
        ></input>
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setDateSearch(e.target.value.toLowerCase())}
          placeholder="Tìm kiếm theo ngày đăng kiểm"
        ></input>
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setPlaceSearch(e.target.value.toLowerCase())}
          placeholder="Tìm kiếm nơi đăng kiểm"
        ></input>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Biển số xe</th>
            <th>Ngày đăng kiểm</th>
            <th>Nơi đăng kiểm</th>
          </tr>
        </thead>
        <tbody>{TableLine}</tbody>
      </table>
    </form>
  );
}

export default RecentTable;
