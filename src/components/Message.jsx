import React from 'react';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

export default function Message({message}) {
  const {currentUser} = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
      </div>

      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

    </div>
  )
}
