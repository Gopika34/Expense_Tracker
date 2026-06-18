import { createContext,useContext,useEffect,useState } from "react";
import { jwtDecode } from "jwt-decode";
import { notifyError } from "../utils/toastMessages";

const AuthContext= createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedToken= localStorage.getItem("token");
        if(storedToken) {
            setToken(storedToken);
            try {
                setUser(jwtDecode(storedToken))
            } catch (err) {
                notifyError(err.message || "Invalid token");
                localStorage.removeItem("token")
            }
        }
    },[])

    const login=(jwt)=>{
        localStorage.setItem("token",jwt)
        setToken(jwt)

        const decodedUser= jwtDecode(jwt);
        setUser(decodedUser);

        return decodedUser;
    }

    const logout=()=>{
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            token,
            user,
            login,
            logout,
            isAuthenticated: !!token
        }}> 
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}