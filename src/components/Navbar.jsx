import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Tiago</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar