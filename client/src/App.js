import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import HomeAdmin from './HomeAdmin/HomeAdmin';
import Stats from './Stats/Stats';
import Form from './Form/Form';
import AccountRegister from './AccountRegister/AccountRegister';
import data_navbar from './data_navbar';
import Upload from './Upload/Upload';
import axios from 'axios';
import { verifyRoute } from './utils/routes';
import Chatbot from './Chatbot/Chatbot'
function App() {
  const [token, setToken] = useState({
    user: localStorage.getItem('user'),
  });
  const location = useLocation();
  const [login, setLogin] = useState()
  useEffect(() => {
    async function Data() {
      const data = await axios.post(verifyRoute, { data: token.user })
      setLogin(data.data)
    }
    Data()
  }, [token])
  return (
    <>
      {login == null ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : login != null && login.rolebit == 0 ? (
        <>
          <Navbar user={login} data={data_navbar[0]} />
          <Chatbot user={login}/>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="sliding"
              timeout={500}
            >
              <Routes>
                <Route
                  path="/"
                  element={<Home user={login} token={token.user} />}
                />
                <Route
                  path="/stats"
                  element={<Stats user={login} token={token.user} />}
                />
                <Route
                  path="form"
                  element={<Form user={login} token={token.user} />}
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </>
      ) : login != null && login.rolebit == 1 ? (
        <>
          <Navbar user={login} data={data_navbar[1]} />
          <Chatbot />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="sliding"
              timeout={500}
            >
              <Routes>
                <Route
                  path="/"
                  element={<HomeAdmin user={login} />}
                />
                <Route path="/signup" element={<AccountRegister token={token} />} />
                <Route path="/upload" element={<Upload token={token} />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </>
      ) : (
        <>
          <h1 style={{ color: 'white' }}>404 NOT FOUND</h1>
        </>
      )}
    </>
  );
}
export default App;
