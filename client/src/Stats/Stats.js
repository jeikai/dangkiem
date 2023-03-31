import React from "react";
import "./Stats.scss";
import Navbar from "../Navbar/Navbar";
import Table from "../Home/Table";
import data from "../data";

export default function () {
  return (
    <div>
      <Navbar />
      <div className="stats">
        <h1 className="stats-header">Xe chưa hết hạn:</h1>
        <Table className="stats-table" data={data} />
      </div>
    </div>
  );
}
