import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="overflow-y-hiden hidden-scrollbar w-full">
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
                    <div className="basis-1/3 flex flex-col items-end justify-center">
                        <div className="text-4xl font-bold text-gray-700 z-10 translate-y-4">About Knackit</div>
                        <div className="text-9xl font-bold text-gray-300 rotate-90 translate-x-64 -translate-y-20">ABOUT</div>
                    </div>
                    <div className="basis-2/3 flex items-center justify-end">
                        <img className="-translate-y-16" src="./images/about-us/1.png" alt="" />
                    </div>
                </div>
            </div>

            {/* ------------------ sec2 -------------- */}
            <div className="bg-indigo-50 min-h-screen flex items-start justify-center">
                <div className="pt-12 w-4/5 max-w-screen-xl flex">
                    <div className="basis-3/6 flex flex-col items-start mr-12">
                        <img className="translate-x-44 pb-8" src="./images/about-us/l1.png" alt="" />
                        <img className="mb-12" src="./images/about-us/l2.png" alt="" />
                        <div className="text-8xl font-regular text-gray-300 mb-16">Money</div>
                        <div className="text-8xl font-regular text-gray-300 mb-16">Talent</div>
                        <div className="text-8xl font-regular text-gray-300 mb-20">Time</div>
                        <div className="text-4xl font-bold text-gray-700 mb-4">Time</div>
                        <div className="text-sm w-4/5 text-justify font-semibold text-gray-500 mb-24">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit et amet,
                            lacus at risus suspendisse et. Tellus blandit nisi at sapien quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            blandit et amet, lacus a Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi
                            at sapien quam.t risus suspendisse et. Tellus blandit nisi at sapien quam.
                        </div>
                        <img className="mb-12" src="./images/about-us/l3.png" alt="" />
                    </div>
                    <div className="basis-3/6 flex justify-start flex-col">
                        <div className="mt-8 text-4xl font-bold text-gray-700 mb-4">Title</div>
                        <div className="text-sm w-4/5 text-justify font-semibold text-gray-500 mb-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit et amet,
                            lacus at risus suspendisse et. Tellus blandit nisi at sapien quam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            blandit et amet, lacus a Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi
                            at sapien quam.t risus suspendisse et. Tellus blandit nisi at sapien quam.
                        </div>
                        <img className="w-3/4 mb-20" src="./images/about-us/r1.png" alt="" />
                        <img className="w-2/3 mb-8 translate-x-48" src="./images/about-us/r2.png" alt="" />
                        <img className="w-2/3 mb-12" src="./images/about-us/r3.png" alt="" />
                    </div>
                </div>
            </div>

            {/* ------------------ sec3 -------------- */}
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
                <img className="w-3/4 mb-20" src="./images/about-us/wide.png" alt="" />
            </div>

            {/* ------------------ sec4 -------------- */}
            <div className="bg-indigo-50 flex pt-4 flex-col items-center justify-center">
                <div className="pt-12 max-w-screen-md flex items-center justify-center flex-wrap">
                    <div className="w-52 h-56 mb-12 mr-8">
                        <div className="mt-8 text-4xl font-black text-gray-700">Big Title</div>
                        <div className="mt-4 text-xl font-bold text-gray-700 mb-4">Sub Title</div>
                    </div>
                    <div className="w-52 h-56 mb-12 mr-8 rounded-3xl bg-white  shadow-indigo-500 shadow-2xl flex flex-col items-center justify-center">
                        <img className="w-2/5 mb-4" src="./images/about-us/vector.png" alt="" />
                        <div className="text-lg text-center font-bold text-gray-500 mb-4">Title</div>
                        <div className="text-sm text-center font-semibold text-gray-500">Subtitle</div>
                    </div>
                    <div className="w-52 h-56 mb-12 mr-8 rounded-3xl bg-white  shadow-indigo-500 shadow-2xl flex flex-col items-center justify-center">
                        <img className="w-2/5 mb-4" src="./images/about-us/vector.png" alt="" />
                        <div className="text-lg text-center font-bold text-gray-500 mb-4">Title</div>
                        <div className="text-sm text-center font-semibold text-gray-500">Subtitle</div>
                    </div>
                    <div className="w-52 h-56 mb-12 mr-8 rounded-3xl bg-white  shadow-indigo-500 shadow-2xl flex flex-col items-center justify-center">
                        <img className="w-2/5 mb-4" src="./images/about-us/vector.png" alt="" />
                        <div className="text-lg text-center font-bold text-gray-500 mb-4">Title</div>
                        <div className="text-sm text-center font-semibold text-gray-500">Subtitle</div>
                    </div>
                    <div className="w-52 h-56 mb-12 mr-8 rounded-3xl bg-white  shadow-indigo-500 shadow-2xl flex flex-col items-center justify-center">
                        <img className="w-2/5 mb-4" src="./images/about-us/vector.png" alt="" />
                        <div className="text-lg text-center font-bold text-gray-500 mb-4">Title</div>
                        <div className="text-sm text-center font-semibold text-gray-500">Subtitle</div>
                    </div>
                    <div className="w-52 h-56 mb-12 mr-8 bg-transparent">

                    </div>
                </div>
            </div>

            {/* ------------------ sec5 -------------- */}
            <div className="bg-indigo-50 flex pt-24 flex-col items-center justify-center">
                <img className="w-3/4 mb-16" src="./images/about-us/wide.png" alt="" />
                <div className="mt-8 text-4xl font-bold text-gray-700 mb-4">Title</div>
                <div className="text-sm w-2/3 text-center font-semibold text-gray-500 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit et amet,
                    lacus at risus suspendisse et. Tellus blandit nisi at sapien quam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    blandit et amet, lacus a Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi
                    at sapien quam.t risus suspendisse et. Tellus blandit nisi at sapien quam.
                </div>
            </div>

        </div>
    )
}

export default About;
