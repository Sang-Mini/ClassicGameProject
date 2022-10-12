import logo from './logo.svg';
import './App.css';
import Image_upload from './Routes/Main.js';
import { Register, Login, FindId, FindPw, ResetPw } from './Routes/User.js';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/FindId' element={<FindId />} />
        <Route path='/FindPw' element={<FindPw />} />
        <Route path='/ResetPw' element={<ResetPw />} />
      </Routes>
    </>
  );
}

export default App;
