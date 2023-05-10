import React, { useState } from 'react';
import './RecentTable.scss';

function RecentTable({ data }) {
  const [plateSearch, setPlateSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');

  let TableLine = data
    .filter((item) => {
      return placeSearch === ''
        ? item
        : item['User.address'].toLowerCase().includes(placeSearch.toLowerCase());
    })
    .filter((item) => {
    //   console.log("item['Car.plateNumber']");
    //   console.log(item['Car.plateNumber']);
    //   console.log(typeof (item['Car.plateNumber']));
      return plateSearch === ''
        ? item
        : item['Car.plateNumber'].includes(plateSearch.toUpperCase());
    })
    .filter((item) => {
      return dateSearch === ''
        ? item
        : item.registerDate.toLowerCase().includes(dateSearch.toLowerCase());
    })
    .map((data) => {
      return (
        <tr key={data.carId}>
          <td>{data.carId}</td>
          <td>{data['Car.plateNumber']}</td>
          <td>{data.registerDate}</td>
          <td>{data['User.address']}</td>
        </tr>
      );
    });

  return (
    <form>
      <div className="search_group">
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setPlateSearch(e.target.value)}
          placeholder="Tìm kiếm theo biển số xe"
        ></input>
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setDateSearch(e.target.value)}
          placeholder="Tìm kiếm theo ngày đăng kiểm"
        ></input>
        <input
          type="text"
          className="searchbox"
          onChange={(e) => setPlaceSearch(e.target.value)}
          placeholder="Tìm kiếm nơi đăng kiểm"
        ></input>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
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
