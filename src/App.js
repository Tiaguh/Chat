import './App.css';
import './style.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export default function App() {
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}