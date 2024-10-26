import React from 'react'
import instagram from '../../../public/instagram.png'
import wa from '../../../public/wa.png'

export default function Footer() {
    return (
        <footer className="navbar rounded-lg shadow dark:bg-gray-900 m-4 mt-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/logo1.jpg"
                            className="h-10 w-10 rounded-full"
                            alt="logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Sweet Scape
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/dashboard" className="hover:underline me-4 md:me-6">
                                List
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="hover:underline me-4 md:me-6">
                                Login
                            </a>
                        </li>
                    </ul>
                    <div className='flex gap-10'>
                        <a href="#">
                            <img src={instagram} alt="instagram" className='w-5' />
                        </a>
                        <a href="">
                            <img src={wa} alt="whatsapp" className='w-5' />
                        </a>
                    </div>
                </div>
                <hr className="my-6 color-garis sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className='color-footer font-normal'>
                    <span className='font-semibold'>Sweet Moments Await</span>
                    <br />Embrace the art of dessert-making with every recipe.
                    <br />Let your creativity flourish and share the joy of baking with those you love.
                </p>
                <p className='color-footer font-normal py-5'>
                    <span className='font-semibold'>Explore Our Collections</span>
                    <br />From timeless classics to new innovations, find recipes that inspire and delight
                    <br />Discover your next favorite dessert today.
                </p>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-5">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        SweetScape
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
