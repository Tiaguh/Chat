import React from 'react'

export default function Login() {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Login</span>

                <form>
                    <input type="text" placeholder="Name..." />
                    <input type="email" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <input type="file" />
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}