import React, { useState } from 'react';
import CardRecipe from './CardRecipe';
import { dataProducts } from '../blocks/Products'; // Sesuaikan dengan path ke data produk

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(dataProducts); // Mulai dengan semua data produk

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter data berdasarkan input
        const filtered = dataProducts.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Anda bisa menambahkan logika lebih lanjut di sini jika perlu
    };

    return (
        <div className="container max-w-screen  mx-auto pt-6">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="mt-4 ">
                <h2 className="text-lg font-semibold">Hasil Pencarian:</h2>
                <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {filteredData.map(item => (
                        <div className=''>
                            <CardRecipe
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                ingredients={item.ingredients}
                                jam={item.jam}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
