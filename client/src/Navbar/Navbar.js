import React from "react";
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
        <img src="/img/logo-small.png" />
        <h2>Tên trung tâm đăng kiểm</h2>
      </div>

      <ul
        className={`nav-actions ${showNavActions ? "nav-actions-visible" : ""}`}
      >
        <li className="nav-action">
          <a href="#" className="nav-action-form">
            Biểu mẫu
          </a>
        </li>
        <li className="nav-action">
          <a href="#" className="nav-action-stats">
            Thống kê
          </a>
        </li>
        <li className="nav-action">
          <a href="#" className="nav-action-log">
            Lịch sử
          </a>
        </li>
        <li className="nav-action">
          <a href="#" className="nav-action-signout">
            Đăng xuất
          </a>
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
