import React from 'react'

export default function Register() {
    return (
        <div className="register-container">
            <div className="register-form">
                <span>Chat App</span>
                <span>Register</span>

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