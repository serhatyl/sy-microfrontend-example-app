import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </a>

          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-14 left-0 w-full bg-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              <li>
                <a
                  href="/admin/home"
                  className="bg-[#191919]/10 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:px-2 md:py-0.5 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/sign-in"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign In
                </a>
              </li>
              {/* Add more as here */}
            </ul>
            <button
              className="mt-4 md:mt-0 rounded-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700"
              type="button"
            >
              Sign Up Now
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {/* {nav ? (
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )} */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
