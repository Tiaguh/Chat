import React from 'react';
import NavBar from './Navbar';
import Search from './Search';

function Sidebar() {
  return (
    <div className="sidebar">
      <NavBar />
      <Search />
    </div>
  )
}

export default Sidebar