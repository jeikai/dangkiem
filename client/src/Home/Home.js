import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import Table from "./Table";
import data from "../data.js";

export default function () {
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
