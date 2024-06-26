import './App.css';
import './style.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

export default function App() {
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