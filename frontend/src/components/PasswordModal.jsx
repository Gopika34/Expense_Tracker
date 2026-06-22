const PasswordModal = ({ showPasswordModal, setShowPasswordModal, currentPassword, setCurrentPassword, newPassword, setNewPassword, handlePasswordUpdate, isUpdatingPassword }) => {

    if (!showPasswordModal) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-[400px] p-6 shadow-lg transition-colors">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Change Password</h2>

                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="flex gap-3">
                    <button
                        onClick={handlePasswordUpdate}
                        disabled={isUpdatingPassword}
                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50"
                    >
                        {isUpdatingPassword ? "Updating..." : "Update"}
                    </button>

                    <button
                        onClick={() => setShowPasswordModal(false)}
                        className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-3 rounded-xl"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordModal;