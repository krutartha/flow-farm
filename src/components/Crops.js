import React from "react";
import CropSlider from "./CropSlider";

function Crops() {
  return (
    <div className="w-full">
      {/* text */}
      <div className="flex-col w-full items-center justify-center">
        <div className="flex py-5 px-16 w-full mt-6 justify-between bg-[#365569] items-center">
          <div className="flex items-center text-4xl text-white">Crops</div>
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
