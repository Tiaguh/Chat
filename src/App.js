import './App.css';
import './style.scss'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export default function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}