import React from 'react'

import { MdPhotoLibrary } from "react-icons/md";
import { TfiClip } from "react-icons/tfi";

export default function Input() {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
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
        />

        <label htmlFor="file">
          <TfiClip
            color="#000"
            size={25}
            style={{ cursor: "pointer" }}
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
