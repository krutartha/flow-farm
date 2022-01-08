import React from "react";
import CropSlider from "./CropSlider";

function Crops({ id }) {
  return (
    <div className="w-full" id={id}>
      {/* text */}
      <div className="flex-col w-full items-center justify-center">
        <div className="flex py-5 px-16 w-full mt-6 justify-center bg-[#365569] items-center">
          <div className="mt-2">
            <div className="flex w-full items-center justify-center text-4xl text-white">Crops</div>
            <div className="mt-1 text-lg text-white">Looking for more? <a className="underline" href="/crops">We got you!</a></div>
          </div>
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
