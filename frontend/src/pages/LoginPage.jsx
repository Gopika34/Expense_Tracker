import { useState } from 'react'
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx"
import { useNavigate, Link } from 'react-router-dom';
import { notifySuccess, notifyError } from '../utils/toastMessages.js';

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_BASE_URL;

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post(`${url}/auth/login`, { email, password });
            const user = login(res.data.token);
            notifySuccess(`Welcome back! ${user.userName}`);
            navigate('/dashboard');
        } catch (err) {
            notifyError(err.response?.data?.message || "Login failed");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleLogin} className="bg-white shadow-sm rounded-xl p-8 w-full max-w-sm space-y-5">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome back</h2>

                <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button type="submit" disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50">
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/signup" className="text-indigo-600 font-medium">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;