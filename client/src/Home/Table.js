import React from "react";
/**
 * data dang:
 * object{
 *      plateNumber,
 *      owner,
 *      time
 * }
 */

function Table(prop) {
  let TableLine = prop.data.map((data, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.plateNumber}</td>
        <td>{data.owner}</td>
        <td>{data.time}</td>
      </tr>
    );
  });
  console.log(TableLine);
  console.log(prop);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Biển số xe</th>
          <th>Chủ sở hữu</th>
          <th>Thời gian</th>
        </tr>
      </thead>
      <tbody>{TableLine}</tbody>
    </table>
  );
}

export default Table;
