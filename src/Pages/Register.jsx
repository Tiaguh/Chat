import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { MdPhoto } from "react-icons/md";

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error (${errorCode}): ${errorMessage}`);
            });
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Name..." />
                    <input type="email" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <input
                        style={{ display: "none" }}
                        type="file" id="file"
                    />
                    <label htmlFor="file">
                        <MdPhoto color="#a7bcff" size={30} />
                        <h3>Add an avatar</h3>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    );
}
