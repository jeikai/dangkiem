import React from 'react';

function Print({ print, columns, propData }) {
  return (
    <div style={{ display: 'none' }}>
      <table ref={print}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Chủ sở hữu</th>
            <th>Số điện thoại</th>
            <th>Biển số xe</th>
            <th>Ngày đăng kiểm</th>
            <th>Ngày hết hạn</th>
          </tr>
        </thead>
        <tbody>
          {propData.map((data) => {
            return <tr>
                <td>{data.id}</td>
                <td>{data.driverName}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.plateNumber}</td>
                <td>{data.registerDate}</td>
                <td>{data.expireDate}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Print;
