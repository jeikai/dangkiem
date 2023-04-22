import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import data_navbar from "../data_navbar";
export default function Navbar({user, data}) {
  const [showNavActions, setShowNavActions] = React.useState(false);
  const logout = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/login");
  }
  function toggleNavActions() {
    console.log("Toggle nav actions");
    setShowNavActions(!showNavActions);
  }
  return (
    <nav>
      <div className="nav-center">
        <img src="/img/logo.png" />
        <h2>{user.username}</h2>
      </div>

      <ul
        className={`nav-actions ${showNavActions ? "nav-actions-visible" : ""}`}
        onMouseLeave={toggleNavActions}
      >
        <li className="nav-action">
          <Link to={data.link1} end >
            <i class={data.icon1}></i>
            <span>{data.tag1}</span>
          </Link>
        </li>
        <li className="nav-action">
          <Link to={data.link2} end >
            <i class={data.icon2}></i>
            <span>{data.tag2}</span>
          </Link>
        </li>
        <li className="nav-action">
          <Link to={data.link3} end >
            <i class={data.icon3}></i>
            <span>{data.tag3}</span>
          </Link>
        </li>
        <li className="nav-action">
          <Link onClick={() => logout()} to={"/login"} end className="nav-action-logout">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Đăng xuất</span>
          </Link>
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
