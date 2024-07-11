import React, { useState } from 'react'

import { MdPhotoLibrary } from "react-icons/md";
import { TfiClip } from "react-icons/tfi";

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

export default function Input() {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = () => {

  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={e=>setText(e.target.value)}
      />
      <div className="send">
        <MdPhotoLibrary
          color="#000"
          size={25}
          style={{ cursor: "pointer" }}
        />

        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={e=>setImg(e.target.files[0])}
        />

        <label htmlFor="file">
          <TfiClip
            color="#000"
            size={25}
            style={{ cursor: "pointer" }}
          />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
