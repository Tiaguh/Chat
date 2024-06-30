import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {

        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Login</span>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <button>Sign In</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}