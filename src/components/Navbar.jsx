import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Tiago</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

// making menu