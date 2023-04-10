import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Stats from "./Stats/Stats";
import Form from "./Form/Form";
function App() {
  const [login, setLogin] = useState({
    user: localStorage.getItem("user"),
  });

  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="sliding" timeout={500}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="form" element={<Form />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
export default App;
