import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Form from "./Form/Form";
import Stats from "./Stats/Stats";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stats />);
