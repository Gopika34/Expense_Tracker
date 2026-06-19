const PasswordModal = ({
    showPasswordModal,
    setShowPasswordModal,
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    handlePasswordUpdate,
    isUpdatingPassword
}) => {

    if (!showPasswordModal) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl w-[400px] p-6 shadow-lg">

                <h2 className="text-xl font-semibold mb-6">
                    Change Password
                </h2>


                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />


                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />


                <div className="flex gap-3">

                    <button
                        onClick={handlePasswordUpdate}
                        disabled={isUpdatingPassword}
                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
                    >
                        {
                            isUpdatingPassword
                                ? "Updating..."
                                : "Update"
                        }
                    </button>


                    <button
                        onClick={() => setShowPasswordModal(false)}
                        className="flex-1 bg-gray-200 py-3 rounded-xl"
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
};

export default PasswordModal;