import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="overflow-y-auto hidden-scrollbar w-full">
            {/* ------------------ navbar -------------- */}
            <nav className="w-full flex justify-between z-20 relative items-center bg-white xl:px-8 2xl:px-16 sm:px-2  h-20">
                <Link className="navbar-brand" to="/">
                    <img src="./images/Logo.png" alt="Logo" />
                </Link>
                <div className="flex items-center">
                    <Link
                        to="#!"
                        className="mx-4 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                        Work
                    </Link>
                    <Link
                        to="#!"
                        className="mx-4 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                        Services
                    </Link>
                    <Link
                        to="#!"
                        className="mx-4 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                        Company
                    </Link>
                    <Link
                        to="#!"
                        className="mx-4 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                        Blog
                    </Link>
                    <Link
                        to="#!"
                        className="mx-4 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                        Resources
                    </Link>
                    <Link
                        to="#!"
                        className="mx-4 w-24 py-2 text-center text-base hover:bg-indigo-700 bg-indigo-600 text-white dark:hover:text-stone-100 rounded-md transition-colors cursor-pointer"
                    >
                        Login
                    </Link>
                </div>
            </nav>

            {/* ------------------ sec1 -------------- */}
            <div className="bg-indigo-50 min-h-screen -mt-16 flex items-center justify-center">
                <div className="w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
                    <div className=" min-h-screen basis-1/5 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-gray-700 z-10 translate-y-4">Contact Us</div>
                        <div className="text-9xl font-black text-gray-300 rotate-90 translate-x-28 -translate-y-4">CONTACT</div>
                    </div>
                    <div className="relative basis-4/5 min-h-screen">
                        <img className="absolute top-0 left-4 sm:left-16 sm:top-12 md:left-36 md:top-12 lg:top-52 lg:-left-16
                        xl:top-52 xl:left-8 2xl:top-52 2xl:left-28" src="./images/contact/1.png" alt="" />

                        <img className="absolute top-56 left-32 sm:left-96 md:left-96 lg:top-96 lg:left-4
                        xl:top-96 xl:left-40 2xl:top-96 2xl:left-60" src="./images/contact/2.png" alt="" />

                        <div className="absolute top-96 left-0 sm:left-28 md:left-56 lg:top-24 lg:left-16
                        xl:top-28 xl:left-72 2xl:top-28 2xl:left-96 translate-x-4 w-80 h-96 bg-white rounded-3xl flex items-center justify-center flex-col">
                            <input className='w-5/6 h-12 border-2 border-transparent border-b-gray-400 text-md text-gray-500 font-semibold mb-4' type="text" name="name" placeholder='Name' />
                            <input className='w-5/6 h-12 border-2 border-transparent border-b-gray-400 text-md text-gray-500 font-semibold mb-4' type="text" name="name" placeholder='Email' />
                            <input className='w-5/6 h-12 border-2 border-transparent border-b-gray-400 text-md text-gray-500 font-semibold mb-4' type="text" name="name" placeholder='Phone' />
                            <input className='w-5/6 h-12 border-2 border-transparent border-b-gray-400 text-md text-gray-500 font-semibold mb-4' type="text" name="name" placeholder='Message' />
                            <button className="w-5/6 rounded-lg py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-md font-semibold transition-colors mt-8">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------ sec2 -------------- */}
            <div className="bg-indigo-50 flex pt-40 pb-36 flex-col items-center justify-center">

                <div className="mt-4 text-2xl sm:text-4xl font-bold text-gray-700 mb-4">
                    Let us know how we can help
                </div>

                <div className='pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-40'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-36 h-36 bg-gray-700 rounded-full'></div>
                        <div className='mt-4 text-2xl font-bold text-gray-700'>9090909090</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-36 h-36 bg-gray-700 rounded-full'></div>
                        <div className='mt-4 text-2xl font-bold text-gray-700'>Location</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-36 h-36 bg-gray-700 rounded-full'></div>
                        <div className='mt-4 text-2xl font-bold text-gray-700'>mail@gmail.com</div>
                    </div>
                </div>
            </div>

            {/* ------------------ sec3 -------------- */}
            <div>
                <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8399882576!2d77.0685565791447!3d28.527581650829173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1642778052236!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact;
