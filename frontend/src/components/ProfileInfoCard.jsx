const ProfileInfoCard = ({
    user,
    setShowUsernameModal,
    setShowPasswordModal
}) => {
    return (
        <div className="space-y-5">

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 transition-colors">

                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-5">
                    Account Information
                </h2>

                <div className="space-y-5">

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
                        <div className="flex justify-between items-center mt-1">
                            <h3 className="font-medium text-gray-800 dark:text-gray-100">{user?.userName}</h3>
                            <button
                                onClick={() => setShowUsernameModal(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                            >
                                Edit
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100 mt-1">{user?.email}</h3>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Password</p>
                        <div className="flex justify-between items-center mt-1">
                            <h3 className="font-medium text-gray-800 dark:text-gray-100">********</h3>
                            <button
                                onClick={() => setShowPasswordModal(true)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                            >
                                Change
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfoCard;