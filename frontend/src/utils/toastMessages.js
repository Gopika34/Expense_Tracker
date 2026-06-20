import { toast } from "react-toastify";

export const notifySuccess = (message) => {
    toast.success(message);
};

export const notifyError = (message) => {
    toast.error(message);
};

export const notifyInfo = (message) => {
    toast.info(message);
};

export const notifyWarning = (message) => {
    toast.warning(message);
};


// SUCCESS
export const notifyLoginSuccess = (name) =>
    toast.success(`Welcome back, ${name}! 👋`);

export const notifySignupSuccess = () =>
    toast.success("Account created successfully 🎉");

export const notifyExpenseAdded = () =>
    toast.success("Expense added successfully 💸");

export const notifyExpenseUpdated = () =>
    toast.success("Expense updated successfully ✏️");

export const notifyExpenseDeleted = () =>
    toast.success("Expense deleted successfully 🗑️");

export const notifyUsernameUpdated = () =>
    toast.success("Username updated successfully 👤");

export const notifyPasswordUpdated = () =>
    toast.success("Password changed successfully 🔒");

export const notifyLogout = () =>
    toast.info("Logged out successfully 👋");

// export const notifyExportSuccess = () =>
//     toast.success("CSV exported successfully 📄");

// export const notifyBudgetSaved = () =>
//     toast.success("Budget saved successfully 🎯");

// ERROR
export const notifyLoginError = () =>
    toast.error("Invalid email or password");

export const notifySignupError = () =>
    toast.error("Couldn't create account");

export const notifyExpenseAddError = () =>
    toast.error("Couldn't add expense");

export const notifyExpenseUpdateError = () =>
    toast.error("Couldn't update expense");

export const notifyExpenseDeleteError = () =>
    toast.error("Couldn't delete expense");

export const notifyPasswordError = () =>
    toast.error("Current password is incorrect");

export const notifyUsernameError = () =>
    toast.error("Couldn't update username");

export const notifyFetchError = () =>
    toast.error("Couldn't fetch expenses");

export const notifyServerError = () =>
    toast.error("Something went wrong. Please try again.");

// WARNING
export const notifySessionExpired = () =>
    toast.warning("Session expired. Please login again.");

export const notifyUnsavedChanges = () =>
    toast.warning("You have unsaved changes");

export const notifyDeleteConfirmation = () =>
    toast.warning("This action cannot be undone");

// INFO
export const notifyLoading = () =>
    toast.info("Loading...");

export const notifyNoTransactions = () =>
    toast.info("No transactions found");

export const notifyAlreadyExists = () =>
    toast.info("User already exists");

// export const notifyFeatureComingSoon = () =>
//     toast.info("Feature coming soon 🚀");