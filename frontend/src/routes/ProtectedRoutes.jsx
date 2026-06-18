import {useAuth} from "../context/AuthContext.jsx";
import {Navigate} from "react-router-dom";

const ProtectedRoutes = ({children})=>{
    const {isAuthenticated} = useAuth();

    return (
        isAuthenticated
            ? children
            : <Navigate to="/login" />
    );
}

export default ProtectedRoutes;

