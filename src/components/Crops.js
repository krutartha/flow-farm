import React from "react";
import CropSlider from "./CropSlider";

function Crops() {
  return (
    <div className="w-full">
      {/* text */}
      <div className="flex-col w-full items-center justify-center">
        <div className="py-5 px-16 w-full flex mt-6 justify-between bg-[#CF404D] items-center">
          <div className="text-4xl text-white">Order our best vegetables</div>
          <div className="text-md text-white border border-white rounded-sm p-3">Contact Us</div>
        </div>
      </div>
      {/* slider */}
      <div className="flex w-full justify-center  h-[60%]">
        <CropSlider />
      </div>
    </div>
  );
}

export default Crops;
