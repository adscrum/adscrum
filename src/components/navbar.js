import Link from "next/link";
import {useState} from "react";

//create an object of menu links and loop through for mobile and desktop menus

//change mobile menu to become slide menu modal with close on click out of div

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-teal-500 p-4 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div className="flex items-center justify-between ">
          <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <button className="mr-4 flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200  hover:border-white hover:text-white">
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <Link
            href="/"
            className="mr-6 flex flex-shrink-0 items-center text-white"
          >
            <svg
              className="mr-2 h-8 w-8 fill-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-semibold tracking-tight">MyApp</span>
          </Link>
        </div>

        <div className="hidden text-sm lg:flex lg:flex-grow">
          <Link
            href="/"
            className="mr-4 mt-4 block text-teal-100 hover:text-white  lg:mt-0 lg:inline-block"
          >
            Home
          </Link>
          <Link
            href="#"
            className="mr-4 mt-4 block text-teal-100 hover:text-white  lg:mt-0 lg:inline-block"
          >
            Examples
          </Link>
          <Link
            href="#"
            className="mt-4 block text-teal-100 hover:text-white  lg:mt-0 lg:inline-block"
          >
            Blog
          </Link>
        </div>

        <div>
          <Link
            href="/auth/signin"
            className=" mr-4 inline-block  py-2 text-sm leading-none text-teal-100 hover:text-white lg:mt-0 "
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0 "
          >
            Sign Up
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(!isOpen)}
        >
          <div
            id="mobile-navbar-items"
            className="container mx-auto text-sm lg:hidden "
          >
            <Link
              href="/"
              className="mr-4 mt-4 block text-teal-100 hover:text-white  "
            >
              Home
            </Link>
            <Link
              href="/examples"
              className="mr-4 mt-4 block text-teal-100 hover:text-white "
            >
              Examples
            </Link>
            <Link
              href="/blog"
              className="mt-4 block text-teal-100 hover:text-white  "
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
