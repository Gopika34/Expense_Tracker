import { useState } from 'react'
import axios from "axios";
import { notifyError,notifySignupSuccess, notifySignupError } from '../utils/toastMessages';
import { useNavigate, Link } from 'react-router-dom';
import {signupSchema} from "../validation/schemas"
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
        const result = signupSchema.safeParse({
            userName,
            email,
            password
        });
        if(!result.success){
            notifyError(result.error.issues[0].message);
            setIsLoading(false);
            return;
        }
        try {
            await axios.post(`${url}/auth/signup`, { userName, email, password });
            notifySignupSuccess();
            navigate('/login');
        } catch (err) {
            notifySignupError();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors">
            <form onSubmit={handleSignup} className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-5 sm:p-8 w-[90%] max-w-sm space-y-5 transition-colors">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">Create account</h2>

                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                    {isLoading ? "Creating..." : "Sign up"}
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-medium">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupPage