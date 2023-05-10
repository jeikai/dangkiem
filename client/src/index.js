import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomeAdmin from "./HomeAdmin/HomeAdmin";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>
);
