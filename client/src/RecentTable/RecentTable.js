import React, { useState } from "react";
import "./RecentTable.scss"
/**
 * data dang:
 * object{
 *      plateNumber,
 *      owner,
 *      time
 * }
 */

function RecentTable(prop) {

  const [plateSearch, setPlateSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');

  let TableLine = prop.data.filter((item) => {
    return placeSearch.toLowerCase() === ''
      ? item
      : item.place.toLowerCase().includes(placeSearch);
  }).filter((item) => {
    return (plateSearch.toLowerCase() === ''
      ? item
      : item.plate_number.toLowerCase().includes(plateSearch));
  }).filter((item) => {
    return (dateSearch.toLowerCase() === ''
      ? item
      : item.registered_date.toLowerCase().includes(dateSearch));
  })
    .map((data) => {
      return (
        <tr key={data.stt}>
          <td>{data.stt}</td>
          <td>{data.plate_number}</td>
          <td>{data.registered_date}</td>
          <td>{data.place}</td>
        </tr>
      );
    });
  console.log(prop);

  return (
    <form>
      <div className="search_group">

        <input type="text" className="searchbox"
          onChange={(e) => setPlateSearch(e.target.value.toLowerCase())} placeholder='Tìm kiếm theo biển số xe'></input>
        <input type="text" className="searchbox"
          onChange={(e) => setDateSearch(e.target.value.toLowerCase())} placeholder='Tìm kiếm theo ngày đăng kiểm'></input>
        <input type="text" className="searchbox"
          onChange={(e) => setPlaceSearch(e.target.value.toLowerCase())} placeholder='Tìm kiếm nơi đăng kiểm'></input>
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
