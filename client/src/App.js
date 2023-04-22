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
function App() {
  const [login, setLogin] = useState({
    user: localStorage.getItem("user"),
  });
  // console.log(JSON.parse(login.user).rolebit)
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
            <Navbar user={JSON.parse(login.user)}/>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="sliding" timeout={500}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/stats" element={<Stats user={JSON.parse(login.user)} />} />
                  <Route path="form" element={<Form />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </>
          :
          login.user != null && JSON.parse(login.user).rolebit == 1 ? 
          <>
            <Navbar>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="sliding" timeout={500}>
                  <Routes>
                    <Route path="/admin" element={<HomeAdmin />} />
                    <Route path="/signup" element={<AccountRegister />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            </Navbar>
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
