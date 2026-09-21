import { useState } from "react";
import {useNavigate} from "react-router"
import "./Login.css";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 💡 Add your login / authentication logic here
        console.log("Form submitted:", { email, password });
        try {
            const response = await axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            console.log("Login successful: ", response.data);
            alert("Login Successful!");
        } catch (error) {
            console.log("Login Error: ", error);
        }
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} className="login-card">
                <h2>Welcome Back</h2>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                </div>

                <button type="submit" className="login-btn">
                    Sign In
                </button>
                <button className="login-btn" onClick={() => navigate("/register")}>
                    Go to Register
                </button>
            </form>
        </div>
    );
}

export default Login;
