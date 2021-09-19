import React from "react";

function Navbar() {
  return (
    <div className="bg-[#2D3E4F] text-white inset-0 z-10 sticky top-0 flex p-6 w-full h-20 items-center justify-between">
      <div className="text-white text-4xl">Flow Farm</div>
      {/* buttons */}
      <div className="flex text-md">
        {/* Technology */}
        <div class="btn">Technology</div>
        {/* crops */}
        <div class="btn">Crops</div>
        {/* contanct */}
        <div class="btn">Contact Us</div>
        {/* pages */}
      </div>
    </div>
  );
}

export default Navbar;
