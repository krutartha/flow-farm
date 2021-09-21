import React from "react";

function Navbar() {
  return (
    <div className="bg-[#2D3E4F] text-white inset-0 z-10 sticky top-0 flex p-6 w-full h-20 items-center justify-between">
      <div className="text-white text-4xl">Flow Farm</div>
      {/* buttons */}
      <div className="flex text-md lg:inline-flex sm:hidden">
        {/* Technology */}
        <div class="btn">Technology</div>
        {/* crops */}
        <div class="btn">Crops</div>
        {/* contanct */}
        <div class="btn">Contact Us</div>
        {/* pages */}
      </div>
      <div className="lg:hidden">
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
      </div>
    </div>
  );
}

export default Navbar;
