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
  console.log(JSON.parse(login.user).username)
  console.log(login.user)
  const location = useLocation();

  return (
    <>
      {login.user == null ?
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        :
        <>
          <Navbar />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="sliding" timeout={500}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/form" element={<Form />} />
                <Route path="/admin" element={<HomeAdmin />} />
                <Route path="/signup" element={<AccountRegister />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </>
      }
    </>
  );
}
export default App;
