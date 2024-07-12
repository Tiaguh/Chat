import React, { useState } from 'react'

import { MdPhotoLibrary } from "react-icons/md";
import { TfiClip } from "react-icons/tfi";

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

export default function Input() {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, "userChats", response.user.uid), {})
            navigate("/")
          });
        }
      );


    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={e => setText(e.target.value)}
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
          onChange={e => setImg(e.target.files[0])}
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
