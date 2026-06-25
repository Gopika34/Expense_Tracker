import { createContext, useContext, useEffect, useState } from "react";
import { fetchExpense, addExpense, deleteExpense, editExpense } from "../api-services/expenseServices.js"
import {
    notifyExpenseUpdated, notifyFetchError, notifyError, notifyExpenseUpdateError, notifyExpenseAddError, notifyExpenseAdded,
    notifyExpenseDeleted, notifyExpenseDeleteError, notifyNoTransactions
} from '../utils/toastMessages.js';
import { useAuth } from "../context/AuthContext.jsx"
import Swal from "sweetalert2";
import { expenseSchema } from "../validation/schemas";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    //form states for add/edit
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [editId, setEditId] = useState(null);

    const [expenses, setExpenses] = useState([]);
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [sortBy, setSortBy] = useState("latest");

    const { isAuthenticated } = useAuth();
    //Fetch on mount
    useEffect(() => {
        const getExpenses = async () => {
            try {
                setIsLoading(true);
                const res = await fetchExpense();
                setExpenses(res.data);
            }
            catch (err) {
                notifyFetchError();
                console.log(err.message);
            }
            finally {
                setIsLoading(false);
            }
        }
        if (isAuthenticated) {
            getExpenses();
        }
        else {
            setExpenses([]);
        }
    }, [isAuthenticated])

    //reset form
    const resetForm = () => {
        setTitle("");
        setAmount("");
        setCategory("Food");
        setEditId(null);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const res = expenseSchema.safeParse({
            title,
            category,
            amount
        });
        if (!res.success) {
            notifyError(res.error.issues[0].message);
            return;
        }

        const result = await Swal.fire({
            title: editId
                ? "Save changes?"
                : "Add transaction?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel"
        });

        if (!result.isConfirmed) return;
        if (!title || !amount || !category) {
            notifyError("Please fill all fields!");
            return;
        }
        if (Number(amount) <= 0) {
            notifyError("Amount should be greater than zero");
            return;
        }
        if (editId) {
            try {
                const res = await editExpense(
                    editId, {
                    title: title.trim(),
                    category: category,
                    amount: Number(amount)
                }
                )
                setExpenses(prev => prev.map(exp =>
                    exp._id === res.data._id ? res.data : exp
                ));
                Swal.fire({
                    icon: "success",
                    title: "Transaction updated!",
                    timer: 1500,
                    showConfirmButton: false
                });
                notifyExpenseUpdated();
                resetForm();
            }
            catch (err) {
                notifyExpenseUpdateError();
                console.log(err.message);
            }
        }
        else {
            try {
                const res = await addExpense({
                    title: title.trim(),
                    category: category,
                    amount: Number(amount)
                })
                setExpenses(prev => [...prev, res.data]);
                Swal.fire({
                    icon: "success",
                    title: "Saved successfully!",
                    timer: 1500,
                    showConfirmButton: false
                });
                // notifyExpenseAdded();
                resetForm();
            }
            catch (err) {
                notifyExpenseAddError();
                console.log(err.message);
            }
        }
    }

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Delete transaction?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel"
        });
        if (!result.isConfirmed) return;

        try {
            await deleteExpense(id);
            setExpenses(prev =>
                prev.filter(exp => exp._id !== id)
            );
            notifyExpenseDeleted();
        }
        catch (err) {
            notifyExpenseDeleteError();
        }
    }

    const handleEdit = (id) => {
        const exp = expenses.find(ex => ex._id === id);
        if (!exp) {
            notifyNoTransactions();
            return;
        }
        setTitle(exp.title);
        setCategory(exp.category);
        setAmount(String(exp.amount));
        setEditId(exp._id)
    }

    // filtered + sorted expenses
    const filteredExpenses = expenses
        .filter((exp) => {
            const matchedSearch = exp.title.toLowerCase().includes(search.toLowerCase()) ||
                exp.category.toLowerCase().includes(search.toLowerCase());

            const matchedCategory = selectedCategory === "All" || exp.category === selectedCategory;

            return matchedSearch && matchedCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "highest": return b.amount - a.amount;

                case "lowest": return a.amount - b.amount;

                case "oldest": return (new Date(a.createdAt) - new Date(b.createdAt));

                case "latest":
                default: return (new Date(b.createdAt) - new Date(a.createdAt));
            }
        });

    // statistics
    const totalExpenses = expenses.reduce((sum, exp) => {
        sum += exp.amount;
        return sum;
    }, 0)

    const highestExpense = expenses.length > 0
        ? Math.max(...expenses.map((e) => e.amount))
        : 0;

    const totalTransactions = expenses.length;

    const lowestExpense = expenses.length > 0
        ? Math.min(...expenses.map((e) => e.amount))
        : 0;

    const avgExpense = expenses.length > 0
        ? totalExpenses / expenses.length
        : 0;

    const recentExpenses = [...expenses]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)

    return (
        <ExpenseContext.Provider value={{
            expenses,
            isLoading,
            filteredExpenses,
            search, setSearch,
            selectedCategory, setSelectedCategory,
            sortBy, setSortBy,
            title, setTitle,
            amount, setAmount,
            category, setCategory,
            editId,
            handleForm,
            handleDelete,
            handleEdit,
            resetForm,
            totalExpenses,
            totalTransactions,
            highestExpense,
            lowestExpense,
            avgExpense,
            recentExpenses
        }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export const useExpense = () => {
    return useContext(ExpenseContext);
}