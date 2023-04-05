import React from "react";
import "./Stats.scss";
import Table from "../Home/Table";
import data from "../data";

export default function () {
  return (
    <div className="stats">
      <h1 className="stats-header">Xe chưa hết hạn:</h1>
      <div className="table-container">
        <Table className="stats-table" data={data} />
      </div>
    </div>
  );
}
