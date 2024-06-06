import React from 'react'

import { MdPhoto } from "react-icons/md";

export default function Login() {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Login</span>

                <form>
                    <input type="email" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <button>Sign In</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}