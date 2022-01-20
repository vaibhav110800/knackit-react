import React from 'react'
import { Link } from "react-router-dom";

const Team = () => {
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
            team
        </div>
    )
}

export default Team;
