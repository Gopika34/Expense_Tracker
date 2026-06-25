import { useState } from 'react'
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx"
import { useNavigate, Link } from 'react-router-dom';
import { notifyError, notifyLoginSuccess, notifyLoginError } from '../utils/toastMessages.js';
import { loginSchema } from "../validation/schemas";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_BASE_URL;

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     try {
    //         const res = await axios.post(`${url}/auth/login`, { email, password });
    //         const user = login(res.data.token);
    //         notifyLoginSuccess(`Welcome back! ${user.userName}`);
    //         navigate('/dashboard');
    //     } catch (err) {
    //         console.log(err);
    //         console.log(err.response);
    //         console.log(err.response?.data);

    //         notifyLoginError();
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const result = loginSchema.safeParse({
            email,
            password
        });
        if (!result.success) {
            notifyError(result.error.issues[0].message);
            setIsLoading(false);
            return;
        }

        console.log("Attempting login to:", `${url}/auth/login`); // ← add this
        try {
            const res = await axios.post(`${url}/auth/login`, { email, password });
            console.log("Login response:", res.data); // ← add this
            const user = login(res.data.token);
            notifyLoginSuccess(`Welcome back! ${user.userName}`);
            navigate('/dashboard');
        } catch (err) {
            console.log("Login error:", err.response?.status, err.response?.data); // ← add this
            notifyLoginError();
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
            <form onSubmit={handleLogin} className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-5 sm:p-8 w-[90%] max-w-sm space-y-5 transition-colors">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">Welcome back</h2>

                <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button type="submit" disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50">
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 font-medium">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;