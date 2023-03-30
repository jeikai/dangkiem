import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import Table from "./Table";

export default function () {
  let data = [
    {
      plateNumber: 123,
      owner: "trung",
      time: "2022",
    },
    {
      plateNumber: 123,
      owner: "trung",
      time: "2022",
    },
    {
      plateNumber: 123,
      owner: "trung",
      time: "2022",
    },
    {
      plateNumber: 123,
      owner: "trung",
      time: "2022",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="recent">
        <div className="recent-header">
          <img src="/img/recent-icon.png" />
          <h3>Đăng kiểm gần đây</h3>
        </div>
        <Table className="recent-table" data={data} />
      </div>
    </div>
  );
}
