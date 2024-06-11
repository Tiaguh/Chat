import React from 'react'

import { IoVideocam } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <IoVideocam
            color="#e2e2e2"
            size={23}
            style={{ cursor: "pointer" }}
          />
          <IoMdPersonAdd
            color="#e2e2e2"
            size={22}
            style={{ cursor: "pointer" }}
          />
          <MdOutlineMoreHoriz
            color="#e2e2e2"
            size={23}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Chat