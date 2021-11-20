import React from "react";
import TechSlider from "./TechSlider";

function Technology({ id }) {
  return (
    <div className="w-full h-[41rem]" id={id}>
      {/* text */}
      <div className="flex-col pb-12  w-full items-center justify-center">
        <div className="flex py-5 px-16 w-full justify-center bg-[#35403A] items-center">
          <div className="mt-2">
            <div className="flex w-full items-center justify-center text-4xl text-white">Technology</div>
            <div className="mt-1 text-lg text-white">Ever wondered how we grow 4 acres of produce in just 1 acre?</div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="flex w-full justify-center  items-center h-[60%]">
        <TechSlider />
      </div>
    </div>
  );
}

export default Technology;
