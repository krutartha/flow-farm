import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const showMenu = () => {
    if (menu == "hidden") {
      setMenu("");
    } else {
      setMenu("hidden");
    }
  };
  return (
    <div className="bg-[#091c28] text-white inset-0 z-10 sticky top-0 flex p-6 w-full h-20 items-center justify-between">
      <div className="w-[35%] md:w-[15%]">
        <a href="/">
          <img className="object-fit" src="/assets/logo.png" />
        </a>
      </div>
      {/* buttons */}
      <div className="hidden text-md md:flex">
        {/* Technology */}
        <Link className="btn" activeClass="actBtn" to="technology" spy={true} smooth={true} offset={-70} duration={1000}>
          Technology
        </Link>

        {/* crops */}
        <Link className="btn" activeClass="actBtn" to="crops" spy={true} smooth={true} offset={-70} duration={1000}>
          Crops
        </Link>
        {/* contanct */}
        <Link className="btn" activeClass="actBtn" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>
          Contact Us
        </Link>
        {/* pages */}
      </div>
      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-whiterounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                className="p-5 hover:bg-gray-800 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 bg-[#091c28] rounded-md shadow-lg">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <Link className="btn" activeClass="actBtn" to="technology" spy={true} smooth={true} offset={-70} duration={1000}>
                    Technology
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="btn" activeClass="actBtn" to="crops" spy={true} smooth={true} offset={-70} duration={1000}>
                    Crops
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="btn" activeClass="actBtn" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>
                    Contact Us
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
