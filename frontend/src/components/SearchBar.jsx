const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search transactions..."
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
    )
}

export default SearchBar