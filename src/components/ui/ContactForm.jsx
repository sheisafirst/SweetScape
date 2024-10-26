import React from 'react';

export default function ContactForm() {
    return (
        <>
            <div className='coontainer mx-auto pt-10'>
                <section className='relative'>
                    <img src="/contact1.jpg" alt="baking" className='absolute w-full h-full object-cover -z-10 rounded-lg object-left-top md:opacity-50 opacity-30'/>
                    <div className='grid md:grid-cols-2 gap-10 p-5'>
                        <div className='md:pt-20 md:pl-36 order-1 md:order-1'>
                            <h1 className='text-black font-bold text-2xl'>Have a sweet idea or a question? We’d love to hear from you!</h1>
                            <p className='text-black font-normal text-lg pt-5'>
                                Whether you’re looking for baking tips, have a recipe suggestion, or just want to chat about your favorite desserts, don’t hesitate to reach out. Your feedback helps us make this space sweeter for everyone!
                            </p>
                        </div>
                        <div className='order-1 md:order-2'>
                            <form className="max-w-sm mx-auto bg-white-50 border border-gray-400 rounded-xl p-6 shadow-xl shadow-white-300/50 hover:shadow-white-400/40 transition-all duration-300 ease-in-out"
                            >
                                <h1 className='text-black text-center font-bold text-3xl pb-5'>Contact Us</h1>
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Your name"
                                        required=""
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@flowbite.com"
                                        required=""
                                    />
                                </div>

                                <form className="max-w-sm mx-auto">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Leave a comment..."
                                        defaultValue={""}
                                    />
                                </form>


                                <div className="flex items-start mb-5 mt-2">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <label
                                        htmlFor="remember"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
