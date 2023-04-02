import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [showNavActions, setShowNavActions] = React.useState(false);

  function toggleNavActions() {
    console.log("Toggle nav actions");
    setShowNavActions(!showNavActions);
  }

  return (
    <nav>
      <div className="nav-center">
        <img src="/img/logo.png" />
        <h2>Tên trung tâm đăng kiểm</h2>
      </div>

      <ul
        className={`nav-actions ${showNavActions ? "nav-actions-visible" : ""}`}
      >
        <li className="nav-action">
          <NavLink to={'/'} end className="nav-action-form">
            <i class="fa-sharp fa-solid fa-rectangle-list"></i>
            <span>Biểu mẫu</span>
          </NavLink>
        </li>
        <li className="nav-action">
          <NavLink to={'/'} end className="nav-action-form">
            <i class="fa-solid fa-chart-column"></i>
            <span>Thống kê</span>
          </NavLink>
        </li>
        <li className="nav-action">
          <NavLink to={'/status'} end className="nav-action-form">
            <i class="fa-solid fa-file"></i>
            <span>Lịch sử</span>
          </NavLink>
        </li>
        <li className="nav-action">
          <NavLink to={'/login'} end className="nav-action-form">
            <i class="fa-solid fa-right-from-bracket"></i>
          </NavLink>
        </li>
      </ul>

      <button
        onClick={toggleNavActions}
        className="nav-toggler"
        aria-label="Toggle navigation"
      ></button>
    </nav>
  );
}
