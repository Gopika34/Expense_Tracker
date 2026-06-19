const UsernameModal = ({
    showUsernameModal,
    setShowUsernameModal,
    userName,
    setUserName,
    handleUsernameUpdate,
    isUpdatingName
}) => {

    if (!showUsernameModal) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl w-[400px] p-6 shadow-lg">

                <h2 className="text-xl font-semibold mb-6">
                    Edit Username
                </h2>

                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="flex gap-3">

                    <button
                        onClick={handleUsernameUpdate}
                        disabled={isUpdatingName}
                        className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
                    >
                        {
                            isUpdatingName
                                ? "Saving..."
                                : "Save"
                        }
                    </button>

                    <button
                        onClick={() => setShowUsernameModal(false)}
                        className="flex-1 bg-gray-200 py-3 rounded-xl"
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
};

export default UsernameModal;