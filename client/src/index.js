import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import HomeAdmin from "./HomeAdmin/HomeAdmin";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <HomeAdmin />
  </div>
);
