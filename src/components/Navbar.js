import React, { useState } from "react";

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
      <div className="w-full md:w-[15%]">
        <a href="/">
          <img className="object-fit" src="/assets/logo.png" />
        </a>
      </div>
      {/* buttons */}
      <div className="hidden text-md md:flex">
        {/* Technology */}
        <div class="btn">Technology</div>
        {/* crops */}
        <div class="btn">
          <a href="/crops">Crops</a>
        </div>
        {/* contanct */}
        <div class="btn">Contact Us</div>
        {/* pages */}
      </div>
      <div className="md:hidden">
        <button onClick={() => showMenu()}>
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
        </button>
      </div>
      {/* mobile menu */}
      <div className={`${menu} inline-block md:hidden`}>
        <a href="#">Technology</a>
        <a href="">Crops</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
