import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate if using React Router
import Swal from 'sweetalert2';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // Toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle logout
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out and redirected to the login page.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged out!',
                    text: 'You have been logged out successfully.',
                    confirmButtonColor: '#3085d6',
                }).then(() => {
                    navigate('/login'); // Redirect to login page after logging out
                });
            }
        });
    };

    return (
        <nav className="navbar border-gray-200 dark:bg-gray-900">
            <div className='mx-6'>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src='/logo1.jpg' className="h-10 w-10 rounded-full" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sweet Scape</span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    List
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/dashboard/add"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Add
                                </a>
                            </li>
                           
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="block py-2 px-3 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-900 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
