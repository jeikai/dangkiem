import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home';
function App() {
  const [login, setLogin] = useState({
    user: localStorage.getItem('user')
  })
  return (
    <>
      {/* <Routes>
        <Route exact path='/' element={<Login/>}></Route>
      </Routes> */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </>
  );
}
export default App;
