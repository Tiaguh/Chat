import React, { useContext, useState } from 'react'

import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"

import { AuthContext } from "../context/AuthContext"

function Search() {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(null)

  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid

    try {
      const res = await getDocs(db, "users", combinedId)

      if (!res.exists()) {
        await setDoc(doc, (db,"chats", combinedId), { messages: [] })
      }
    } catch (err) {

    }

  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user..."
          onChange={e => setUserName(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect} >
        <img src={user.photoUrl} />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}

    </div>
  )
}

export default Search