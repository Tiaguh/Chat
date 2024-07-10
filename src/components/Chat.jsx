import React, { useContext } from 'react'

import { IoVideocam } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";

import Messages from './Messages';
import Input from './Input'

import { ChatContext } from '../context/ChatContext';

export default function Chat() {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
      <Messages />
      <Input />
    </div>
  )
}