import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import HomeAdmin from "./HomeAdmin/HomeAdmin"
import Stats from "./Stats/Stats";
import Form from "./Form/Form";
import AccountRegister from "./AccountRegister/AccountRegister";
import data_navbar from "./data_navbar";
function App() {
  const [login, setLogin] = useState({
    user: localStorage.getItem("user"),
  });
  const location = useLocation();

  return (
    <>
      {login.user == null ?
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        :
        login.user != null && JSON.parse(login.user).rolebit == 0 ?
          <>
            <Navbar user={JSON.parse(login.user)} data={data_navbar[0]} />
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="sliding" timeout={500}>
                <Routes>
                  <Route path="/" element={<Home user={JSON.parse(login.user)}/>} />
                  <Route path="/stats" element={<Stats user={JSON.parse(login.user)} />} />
                  <Route path="form" element={<Form user={JSON.parse(login.user)}/>} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </>
          :
          login.user != null && JSON.parse(login.user).rolebit == 1 ?
            <>
              <Navbar user={JSON.parse(login.user)} data={data_navbar[1]} />
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="sliding" timeout={500}>
                  <Routes>
                    <Route path="/" element={<HomeAdmin />} />
                    <Route path="/signup" element={<AccountRegister />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            </>
            :
            <>
              404 NOT FOUND
            </>
      }
    </>
  );
}
export default App;
