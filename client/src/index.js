import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import HomeAdmin from "./HomeAdmin/HomeAdmin";
import AccountRegister from "./AccountRegister/AccountRegister";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <AccountRegister />
  </div>
);
