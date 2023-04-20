import React from "react";
import "./Home.scss";
import RecentTable from "../RecentTable/RecentTable"
import data from "../data.js";

export default function () {
  return (
    <div className="recent">
      <div className="recent-header">
        <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse fa-2xl"></i>
        <h1>Đăng kiểm gần đây</h1>
      </div>
      <div className="table-container">
        <RecentTable data={data} />
      </div>
    </div>
  );
}
