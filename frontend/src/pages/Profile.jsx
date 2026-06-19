import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import ProfileInfoCard from "../components/ProfileInfoCard";
import UsernameModal from "../components/UsernameModal";
import PasswordModal from "../components/PasswordModal";

import {
    updateUsername,
    updatePassword
} from "../api-services/profileServices";

import {
    notifySuccess,
    notifyError
} from "../utils/toastMessages";

const Profile = () => {

    const { user, login } = useAuth();

    const [showUsernameModal, setShowUsernameModal] = useState(false);

    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const [userName, setUserName] = useState(
        user?.userName || ""
    );

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [isUpdatingName, setIsUpdatingName] = useState(false);

    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    
    const handleUsernameUpdate = async () => {

        if (!userName.trim()) {
            notifyError("Username cannot be empty");
            return;
        }
        try {
            setIsUpdatingName(true);
            const res = await updateUsername({
                userName
            });
            console.log(res.data);
            login(res.data.token);
            notifySuccess(
                "Username updated successfully"
            );
            setShowUsernameModal(false);
        }
        catch (err) {
            notifyError(
                err.response?.data?.message ||
                "Couldn't update username"
            );
        }
        finally {
            setIsUpdatingName(false);
        }
    }

    const handlePasswordUpdate = async () => {
        if (
            !currentPassword ||
            !newPassword
        ) {
            notifyError(
                "Fill all password fields"
            );
            return;
        }

        if (
            newPassword.length < 6
        ) {
            notifyError(
                "Password should contain at least 6 characters"
            );
            return;
        }
        try {
            setIsUpdatingPassword(true);
            await updatePassword({
                currentPassword,
                newPassword
            });

            notifySuccess(
                "Password updated successfully"
            );

            setCurrentPassword("");

            setNewPassword("");

            setShowPasswordModal(false);

        }
        catch (err) {

            notifyError(
                err.response?.data?.message ||
                "Couldn't update password"
            );

        }
        finally {

            setIsUpdatingPassword(false);

        }

    }
    return (

        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                My Profile
            </h1>
            <ProfileInfoCard
                user={user}
                setShowUsernameModal={
                    setShowUsernameModal
                }
                setShowPasswordModal={
                    setShowPasswordModal
                }
            />


            <UsernameModal
                showUsernameModal={
                    showUsernameModal
                }
                setShowUsernameModal={
                    setShowUsernameModal
                }
                userName={userName}
                setUserName={setUserName}
                handleUsernameUpdate={
                    handleUsernameUpdate
                }
                isUpdatingName={
                    isUpdatingName
                }
            />


            <PasswordModal
                showPasswordModal={
                    showPasswordModal
                }
                setShowPasswordModal={
                    setShowPasswordModal
                }
                currentPassword={
                    currentPassword
                }
                setCurrentPassword={
                    setCurrentPassword
                }
                newPassword={
                    newPassword
                }
                setNewPassword={
                    setNewPassword
                }
                handlePasswordUpdate={
                    handlePasswordUpdate
                }
                isUpdatingPassword={
                    isUpdatingPassword
                }
            />
        </div>

    )
}
export default Profile;