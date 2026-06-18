import React from 'react'
import SearchBar from './SearchBar.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import SortDropdown from './SortDropdown.jsx';

const ExpenseForm = ({ title, setTitle, amount, setAmount, category, setCategory,
    handleForm, editId, search, setSearch, selectedCategory, setSelectedCategory
    , sortBy, setSortBy }) => {
    return (
        <div>
            <form onSubmit={(e) => handleForm(e)}>
                <input type="text" value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                <select value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                {/* <input type="text" value={category} placeholder='category' onChange={(e) => setCategory(e.target.value)} /> */}
                <input type="number" value={amount} placeholder='Amount' onChange={(e) => setAmount(e.target.value)} />
                <button type='submit'>{editId ? "Save" : "Add"}</button>
            </form>
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
    )
}

export default ExpenseForm
