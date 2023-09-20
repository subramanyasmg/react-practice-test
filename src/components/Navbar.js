import { useState } from "react";
import { siteName } from "../server";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import HeaderIcons from "./HeaderIcons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link
                className="text-xl text-neutral-800 dark:text-neutral-200 uppercase"
                to="/"
              >
                {siteName}
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavLinks linkClassName="uppercase text-sm font-medium text-gray-500 hover:text-gray-900" />
            </nav>
            <HeaderIcons
              divClassName="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
              linkClassName="whitespace-nowrap pr-2 text-sm font-medium text-gray-500 hover:text-gray-900"
            />
          </div>
        </div>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
