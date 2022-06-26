import React from "react";
import Home from "../Home/Home";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <HashLink className="rounded-xl" to="/#banner" smooth>
          Home
        </HashLink>
      </li>
      <li>
        <HashLink className="rounded-xl" to="/#about" smooth>
          About
        </HashLink>
      </li>
      <li>
        <HashLink className="rounded-xl" to="/#portfolio" smooth>
          Portfolio
        </HashLink>
      </li>
      <li>
        <HashLink className="rounded-xl" to="/#contacts" smooth>
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-100 text-primary sticky top-0 pr-[35%] z-50">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2 font-[Allura] text-xl font-bold">
            EMON
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal ">
              {/* <!-- Navbar menu content here --> */}
              {links}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Home />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
