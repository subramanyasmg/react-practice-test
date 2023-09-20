import { useState } from "react";
import { navLinks, siteName } from "../server";
import { Link } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={
          open
            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="uppercase">{siteName}</div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                  <NavLinks linkClassName="uppercase -m-3 p-3 flex items-center rounded-md hover:bg-gray-50" />
                <HeaderIcons 
                    divClassName="sm:inline-flex md:hidden items-center" 
                    linkClassName="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100"/> 
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileNavbar;
