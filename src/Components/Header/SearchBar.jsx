import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (searchOpen && inputRef.current) inputRef.current.focus();
    }, [searchOpen]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearch(params.get("search") || "");
    }, [location]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        navigate(`/movie?search=${encodeURIComponent(value)}`);
    };

    const handleBlur = () => {
        setSearchOpen(false);
    };

    return (
        <div className="relative flex items-center ">

            <button
                id="search-btn"
                className="p-2 rounded-full hover:bg-cyan-800 transition cursor-pointer"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                type="button"
            >
                <FiSearch className="w-6 h-6" />
            </button>


            <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={handleSearchChange}
                onBlur={handleBlur}
                className={` transition-all duration-300 bg-white text-gray-800 px-3 py-2 rounded shadow-lg absolute right-0 top-0 ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                    }`}
                placeholder="Search movies..."
                style={{ minWidth: searchOpen ? "200px" : "0", height: "40px" }}
            />
            

        </div>
    );
}