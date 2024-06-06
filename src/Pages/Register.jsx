import React from 'react'

import { MdPhoto } from "react-icons/md";

export default function Register() {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Register</span>

                <form>
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
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}