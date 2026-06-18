import { useState } from 'react'
import axios from "axios";
import { notifyError, notifySuccess } from '../utils/toastMessages';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_BASE_URL;

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(`${url}/auth/signup`, { userName, email, password });
            notifySuccess("Account created successfully!");
            navigate('/login');
        } catch (err) {
            notifyError(err.response?.data?.message || "Signup failed");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSignup} className="bg-white shadow-sm rounded-xl p-8 w-full max-w-sm space-y-5">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Create account</h2>

                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                    placeholder='Username' className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />

                <button type="submit" disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50">
                    {isLoading ? "Creating..." : "Sign up"}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-indigo-600 font-medium">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupPage