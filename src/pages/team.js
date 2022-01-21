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
            {/* ------------------ sec1 -------------- */}
            <div className="bg-indigo-50 min-h-screen -mt-16 flex items-center justify-center">
                <div className="w-full flex">
                    <div className="basis-1/5 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-gray-700 z-10 translate-y-4">Team</div>
                        <div className="text-9xl font-black text-gray-300 rotate-90 translate-x-20 -translate-y-24">PEOPLE</div>
                    </div>
                    <div className="basis-4/5 flex items-center justify-end">
                        <img className="-translate-y-16 w-2/3" src="./images/team/banner.png" alt="" />
                    </div>
                </div>
            </div>

            {/* ------------------ sec2 -------------- */}
            <div className="bg-indigo-50 flex pt-16 flex-col items-center justify-center">
                <div className="mt-8 text-4xl font-bold text-gray-700 mb-4">Title</div>
                <div className="text-sm w-2/3 text-center font-semibold text-gray-500 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit et amet,
                    lacus at risus suspendisse et. Tellus blandit nisi at sapien quam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    blandit et amet, lacus a Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi
                    at sapien quam.t risus suspendisse et. Tellus blandit nisi at sapien quam.
                </div>
                <img className="w-3/4 mb-20" src="./images/team/wide.png" alt="" />
            </div>

            {/* ------------------ sec3 -------------- */}
            <div className="bg-indigo-50 flex pt-12 pb-32 flex-col items-center justify-center">

                <div className="mt-4 text-4xl font-bold text-gray-700 mb-4">Title</div>

                <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                    <div className="w-72 h-88 rounded-3xl relative">
                        <img className="abolute w-full h-full object-cover rounded-3xl" src="./images/team/zz.png" alt="" />
                        <div className='absolute bottom-6 left-3 bg-white/60 backdrop-blur-3xl w-11/12 h-40 flex flex-col items-start justify-center rounded-xl'>
                            <div className='pl-4 text-xl text-white font-semibold'>Name</div>
                            <div className='w-11/12 pl-4 text-xs text-white font-semibold'>Nunc velit ultrices lobortis elementum. Nunc velit ultrices lobortis elementum.Nunc velit ultrices lobortis elementum.</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ------------------ sec4 -------------- */}
            <div className="h-80 flex flex-col items-center justify-center bg-blue-100">
                <div className="mt-8 text-4xl font-bold text-gray-700 mb-8">We are hiring</div>
                <div className="text-sm w-2/3 text-center font-semibold text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit et amet, lacus at risus suspendisse et. Tellus bla
                </div>
                <button className="w-60 rounded-lg py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors mt-5 ">
                    View Roles
                </button>
            </div>
        </div>
    )
}

export default Team;
