import React from "react";
import "./HomeAdmin.scss";

export default function HomeAdmin() {
  return (
    <div className="centers">
      <div className="centers-header">
        <h1>Danh sách các trung tâm đăng kiểm</h1>
      </div>

      <ul className="centers-list">
        <li>Trung tâm 1</li>
        <li>Trung tâm 2</li>
        <li>Trung tâm 3</li>
        <li>Trung tâm 4</li>
        <li>Trung tâm 5</li>
      </ul>
    </div>
  );
}
