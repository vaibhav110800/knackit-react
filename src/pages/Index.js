import {
  DownCircleFilled,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
const Index = () => {
  return (
    <div className="overflow-y-auto hidden-scrollbar w-full">
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
      {/* --------------- sec1 --------------------- */}
      <div className="bg-indigo-50 -mt-12">
        <div className="xl:px-8 2xl:px-16 sm:px-2 flex items-center justify-center sec1">
          <div className="sec1-l basis-2/3" >
            <img className="sec1-img1" src="./images/sec-1/1.1.png" alt="" />
            <img className="sec1-img2" src="./images/sec-1/1.2.png" alt="" />
            <img className="sec1-img3" src="./images/sec-1/1.3.png" alt="" />
            <img className="sec1-img4" src="./images/sec-1/1.4.png" alt="" />

            <h1 className="font-semibold tracking-wide leading-none text-indigo-500">
              Turn your passion <br /> into Profession
            </h1>
          </div>

          <div className="items-center flex justify-start basis-1/3">
            <div className="sec1-r-inner">
              <div className="bg-white shadow rounded-xl mb-3 w-96 sec1-r-box">

                <div className="flex justify-center items-center h-16">
                  <div className="w-1/5 mx-auto flex justify-center items-center h-16 rounded-lg">
                    <img src="./images/sec-1/twitter.png" alt="" />
                  </div>
                  <div className="w-1/5 mx-auto flex justify-center items-center h-16 rounded-b-lg shadow-md border-r border-gray-100 cursor-pointer">
                    <img src="./images/sec-1/fb.png" alt="" />
                  </div>
                  <div className="w-1/5 mx-auto flex justify-center items-center h-16 rounded-b-lg shadow-md border-r border-gray-100 cursor-pointer">
                    <img src="./images/sec-1/insta.png" alt="" />
                  </div>
                  <div className="w-1/5 mx-auto flex justify-center items-center h-16 rounded-b-lg shadow-md border-r border-gray-100 cursor-pointer">
                    <img src="./images/sec-1/yt.png" alt="" />
                  </div>
                  <div className="w-1/5 mx-auto flex justify-center items-center h-16 rounded-b-lg shadow-md border-r border-gray-100 cursor-pointer">
                    <img src="./images/sec-1/u.png" alt="" />
                  </div>
                </div>

                <div className="mx-auto px-3 py-4 flex flex-col items-start justify-center w-11/12 sec1-r-bottom">
                  <h3 className="text-md font-semibold">Number of followers</h3>

                  <div className="h-24 flex justify-center items-center">

                    <div className="slidecontainer">
                      <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
                      <p className="pt-2 font-semibold">Value: <span id="demo"></span></p>
                    </div>

                  </div>

                  <h3 className="text-lg text-indigo-600 mb-3 font-semibold">
                    Expected earnings with knackit
                  </h3>
                  <h3 className="text-sm mb-3 font-semibold">
                    <span className="text-6xl text-indigo-600 font-semibold">
                      ₹ 210
                    </span>{" "}
                    per month
                  </h3>
                  <button className="w-full rounded-lg py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors mt-5 ">
                    Get Started
                  </button>
                </div>
              </div>

              <h2 className="text-sm text-left pl-2.5 font-semibold">
                Estimate what you could make on Knackit
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-3">
        <div className="mx-auto max-w-2xl flex items-center justify-between flex-wrap">
          <div className="flex">
            <img src="./images/sec-2/1.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-white mb-3">Get Knackit</h3>
            <div className="flex">
              <img
                src="./images/sec-2/2.1.png"
                className="mx-1 cursor-pointer"
                alt=""
              />
              <img
                src="./images/sec-2/2.2.png"
                className="mx-1 cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <img src="./images/sec-2/3.png" alt="" />
          </div>
        </div>
      </div>
      {/* --------------- sec2 --------------------- */}
      <div className="bg-indigo-50 flex flex-col justify-center items-center">
        <h2 className="text-4xl mt-16 text-center text-gray-700 font-bold">Who uses Knackit</h2>
        <p className="text-center w-10/12 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5  mt-3 text-gray-500 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi at
          sapien quam.
        </p>

        <div className="flex flex-wrap mt-16 h-fit-content pb-32 items-center justify-between w-3/4 mx-auto">

          <div className="sec3-box sec3-box1 h-0 md:h-96 lg:h-96 xl:h-96 2xl:h-96">
            <img className="sec3-box1-img1" src="./images/sec-3/1.png" alt="" />
            <img className="sec3-box1-img2" src="./images/sec-3/2.png" alt="" />
          </div>

          <ul className="flex items-center justify-center flex-col list-none text-gray-500 pb-8
                        text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl
                        w-full md:w-fit lg:w-fit xl:w-fit 2xl:w-fit">
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Podcaster</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Visual Artist</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Musician</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Communities</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Tutorials and Education</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Writers and Journalist</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Non-profits</li>
            <li className="py-3 font-semibold cursor-pointer  hover:text-indigo-500 ease-in-out">Creators-of-all-kinds</li>
          </ul>

          <div className="flex items-center justify-center flex-col bg-sky-200 px-4 py-5 rounded-3xl w-full md:w-fit lg:w-fit xl:w-fit 2xl:w-fit">
            <h2 className="text-xl font-semibold mb-3 ml-2 text-gray-700">
              What you will get here
            </h2>
            <li className="text-base p-2 opacity-75 max-w-xs text-gray-500">
              <span className="-ml-2 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse blandit et amet, lacu{" "}
              </span>
            </li>
            <li className="text-base p-2 opacity-75 max-w-xs text-gray-500">
              <span className="-ml-2 font-semibold">
                cing elit. Suspendisse blandit et amet, lacu
              </span>
            </li>
            <li className="text-base p-2 opacity-75 max-w-xs text-gray-500">
              <span className="-ml-2 font-semibold">
                cing elit. Suspendisse blandit et amet, lacu
              </span>
            </li>
            <li className="text-base p-2 opacity-75 max-w-xs text-gray-500">
              <span className="-ml-2 font-semibold">
                cing elit. Suspendisse blandit et amet, lacu
              </span>
            </li>
          </div>
        </div>
      </div>

      {/* --------------- sec3 --------------------- */}
      <div className="bg-blue-100">
        <section>
          <div className="mx-auto sec4-container">
            <div className="sec4-slideDiv">
              <article className="sec4-slide active">
                <div className="flex justify-center flex-col basis-1/3">
                  <h1 className="text-xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-gray-700 font-bold">
                    What you will get here
                  </h1>
                  <p className="text-xs  md:text-base lg:text-base xl:text-base 2xl:text-base text-gray-500 mt-2 font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacu
                  </p>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <p className="text-2xl text-indigo-600 mr-2 font-semibold">
                      Scroll
                    </p>{" "}
                    <DownCircleFilled className="text-md text-indigo-600" />
                  </div>
                </div>
                <div className="sec4-r">
                  <img
                    className="sec4-img1"
                    src="./images/sec-4/1.png"
                    alt=""
                  />
                  <img
                    className="sec4-img2"
                    src="./images/sec-4/2.png"
                    alt=""
                  />
                  <img
                    className="sec4-img3"
                    src="./images/sec-4/3.png"
                    alt=""
                  />
                  <img
                    className="sec4-img4"
                    src="./images/sec-4/4.png"
                    alt=""
                  />
                </div>
              </article>

              <article className="sec4-slide">
                <div className="flex justify-center flex-col basis-1/3">
                  <h1 className="text-4xl text-gray-700 font-bold">
                    What you will get here
                  </h1>
                  <p className="text-base text-gray-500 mt-2 font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacu
                  </p>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <p className="text-2xl text-indigo-600 mr-2 font-semibold">
                      Scroll
                    </p>{" "}
                    <DownCircleFilled className="text-md text-indigo-600" />
                  </div>
                </div>
                <div className="sec4-r">
                  <img
                    className="sec4-img1"
                    src="./images/sec-4/1.png"
                    alt=""
                  />
                  <img
                    className="sec4-img2"
                    src="./images/sec-4/2.png"
                    alt=""
                  />
                  <img
                    className="sec4-img3"
                    src="./images/sec-4/3.png"
                    alt=""
                  />
                  <img
                    className="sec4-img4"
                    src="./images/sec-4/4.png"
                    alt=""
                  />
                </div>
              </article>

              <article className="sec4-slide">
                <div className="flex justify-center flex-col basis-1/3">
                  <h1 className="text-4xl text-gray-700 font-bold">
                    What you will get here
                  </h1>
                  <p className="text-base text-gray-500 mt-2 font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacu
                  </p>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <p className="text-2xl text-indigo-600 mr-2 font-semibold">
                      Scroll
                    </p>{" "}
                    <DownCircleFilled className="text-md text-indigo-600" />
                  </div>
                </div>
                <div className="sec4-r">
                  <img
                    className="sec4-img1"
                    src="./images/sec-4/1.png"
                    alt=""
                  />
                  <img
                    className="sec4-img2"
                    src="./images/sec-4/2.png"
                    alt=""
                  />
                  <img
                    className="sec4-img3"
                    src="./images/sec-4/3.png"
                    alt=""
                  />
                  <img
                    className="sec4-img4"
                    src="./images/sec-4/4.png"
                    alt=""
                  />
                </div>
              </article>

              <article className="sec4-slide">
                <div className="flex justify-center flex-col basis-1/3">
                  <h1 className="text-4xl text-gray-700 font-bold">
                    What you will get here
                  </h1>
                  <p className="text-base text-gray-500 mt-2 font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse blandit et amet, lacu
                  </p>
                  <div className="flex items-center mt-5 cursor-pointer">
                    <p className="text-2xl text-indigo-600 mr-2 font-semibold">
                      Scroll
                    </p>{" "}
                    <DownCircleFilled className="text-md text-indigo-600" />
                  </div>
                </div>
                <div className="sec4-r">
                  <img
                    className="sec4-img1"
                    src="./images/sec-4/1.png"
                    alt=""
                  />
                  <img
                    className="sec4-img2"
                    src="./images/sec-4/2.png"
                    alt=""
                  />
                  <img
                    className="sec4-img3"
                    src="./images/sec-4/3.png"
                    alt=""
                  />
                  <img
                    className="sec4-img4"
                    src="./images/sec-4/4.png"
                    alt=""
                  />
                </div>
              </article>
            </div>

            <nav className="sec4-controls z-10">
              <button
                className="sec4-button"
                type="button"
                aria-label="Go to first image"
              ></button>
              <button
                className="sec4-button"
                type="button"
                aria-label="Go to second image"
              ></button>
              <button
                className="sec4-button"
                type="button"
                aria-label="Go to third image"
              ></button>
              <button
                className="sec4-button"
                type="button"
                aria-label="Go to fourth image"
              ></button>
            </nav>
          </div>
        </section>
      </div>

      {/* --------------- sec4 --------------------- */}
      <div className="bg-sky-50 flex flex-col items-center justify-center">
        <h2 className="text-4xl mb-3 font-bold mt-16 text-gray-700">Become a Creator</h2>
        <p className="w-3/5 text-center text-gray-500 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          blandit et amet, lacus at risus suspendisse et. Tellus blandit nisi at
          sapien quam.
        </p>

        <div className="sec5-inner">
          <img className="sec5-img-l" src="./images/sec-5/left.png" alt="" />
          <img className="sec5-img-r" src="./images/sec-5/right.png" alt="" />
          <img className="sec5-img-1" src="./images/sec-5/1.png" alt="" />
          <img className="sec5-img-2" src="./images/sec-5/2.png" alt="" />
          <img className="sec5-img-3" src="./images/sec-5/3.png" alt="" />
          <img className="sec5-img-4" src="./images/sec-5/4.png" alt="" />
          <img className="sec5-img-5" src="./images/sec-5/5.png" alt="" />
          <h3 className="sec5-img-h3 text-cyan-500 font-bold text-3xl">
            Title
          </h3>
          <p className="sec5-img-h6 text-cyan-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            veritatis aliquid deleniti aperiam magnam ipsa facilis dolor,
            cupiditate nisi mollitia reprehenderit ad molestiae iusto doloribus
            iure inventore quis voluptatum quisquam.
          </p>
        </div>
      </div>

      {/* --------------- footer --------------------- */}
      <footer className="min-h-max bg-white flex items-center flex-col justify-center flex-wrap">
        <div className="mx-auto flex flex-wrap justify-between items-start max-w-7xl font-semibold">
          <div className="flex flex-col justify-center mr-16 w-56 my-12">
            <img src="./images/Logo.png" alt="" />
            <h3 className="mt-3 max-w-xs w-52 text-left text-sm text-gray-700">
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </h3>
            <h3 className="text-sm text-left text-gray-500 mt-5">
              Copyright Tanah Air Studio
            </h3>
          </div>
          <div className="flex flex-col justify-end w-52 my-12">
            <h4 className="mb-3 text-semibold text-xl text-indigo-600 ">
              Service
            </h4>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Illustration
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Mobile Design
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Motion Graphic
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Web Design
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Development
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              SEO
            </Link>
          </div>
          <div className="flex flex-col w-52 my-12">
            <h4 className="mb-3 text-semibold text-xl text-indigo-600 ">
              Company
            </h4>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Service
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Features
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Our team
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Portfolio
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Blog
            </Link>
            <Link className="text-gray-500 hover:text-gray-700 py-2" to="#!">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col mr-4 my-12">
            <div className="flex justify-start">
              <Link to="#!" className="f-box-sm">
                <InstagramFilled className="text-3xl mb-3 text-indigo-600 mr-2 hover:text-indigo-500" />
              </Link>
              <Link to="#!" className="f-box-sm">
                <TwitterCircleFilled className="text-3xl mb-3 text-indigo-600 mr-2 hover:text-indigo-500" />
              </Link>
              <Link to="#!" className="f-box-sm">
                <FacebookFilled className="text-3xl mb-3 text-indigo-600 mr-2 hover:text-indigo-500" />
              </Link>
              <Link to="#!" className="f-box-sm">
                <YoutubeFilled className="text-3xl mb-3 text-indigo-600 mr-2 hover:text-indigo-500" />
              </Link>
            </div>
            <h3 className="w-52 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod.
            </h3>
          </div>
          <div className="flex flex-col my-12 ">
            <h4 className="text-indigo-600 font-semibold text-xl">
              Join a Newsletter
            </h4>
            <h3 className="mt-4 mb-2 self-start text-sm">Your Email</h3>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="border border-indigo-200 py-2 px-3 w-60"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-2 w-40 rounded-md mt-4">
              <Link to="#!">Subscribe</Link>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
