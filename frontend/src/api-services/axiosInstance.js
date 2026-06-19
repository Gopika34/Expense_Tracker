import axios from "axios";
import { notifyError } from "../utils/toastMessages";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        notifyError(error.message);
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {

        // server response
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 400:
                    notifyError('Bad request');
                    break;

                case 401:

                    if (
                        !window.location.pathname.includes("/login")
                    ) {

                        notifyError("Session expired");

                        localStorage.removeItem("token");

                        window.location.href = "/login";
                    }

                    break;

                case 403:
                    notifyError("Forbidden");
                    break;

                case 404:
                    notifyError("Not Found");
                    break;

                case 500:
                    notifyError("Internal Server Error");
                    break;

                default:
                    notifyError("Server error occurred");
            }
        }

        // ==========================
        // REQUEST SENT BUT NO RESPONSE
        // ==========================

        else if (error.request) {

            notifyError("No response from server");

            /*
                Possible reasons:
                - backend down
                - internet issue
                - timeout
                - CORS error
            */
        }

        // ==========================
        // AXIOS / CONFIG ERROR
        // ==========================

        else {
            notifyError("Axios error:", error.message);
        }

        return Promise.reject(error);
    }
)

