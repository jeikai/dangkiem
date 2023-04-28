import React from "react";
import "./HomeAdmin.scss";

import Table from "../RecentTable/RecentTable";
import Collapsible from "../Stats/Collapsible/Collapsible"
import mockData from "../data.js";

export default function HomeAdmin() {

  const centersList = [{ name: 'trung tam 1', id: 1 }, { name: 'trung tam 2', id: 2 }, { name: 'trung tam 3', id: 3 }];
  let Centers = centersList.map((data) => {
    return (
      <div>
        <Collapsible label={data.name} >
          <div className="table-container">
            <Table className="stats-table" data={mockData} />
          </div>
        </Collapsible>

        <hr />
      </div>
    )
  })


  return (
    <div className="centers">
      <div className="centers-header">
        <h1>Danh sách các trung tâm đăng kiểm</h1>
      </div>

      <div>
        {Centers}
      </div>
    </div>
  );
}
