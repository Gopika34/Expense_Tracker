import { axiosInstance } from "./axiosInstance";

export const updateUsername = (data) => {
    return axiosInstance.put(
        "/auth/profile/update-username",
        data
    );
};

export const updatePassword = (data) => {
    return axiosInstance.put(
        "/auth/profile/update-password",
        data
    );
};