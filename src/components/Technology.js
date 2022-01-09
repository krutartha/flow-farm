import React from "react";
import TechSlider from "./TechSlider";

function Technology({ id }) {
  return (
    <div className="w-full h-[41rem]" id={id}>
      {/* text */}
      <div className="flex-col pb-12  w-full items-center justify-center">
        <div className="flex py-5 px-5 w-full justify-center bg-[#365569] items-center">
          <div className="flex-col mt-2 items-center justify-center md:w-auto">
            <div className="flex w-full items-center justify-center text-4xl text-white">Technology</div>
            <div className="flex w-full items-center justify-center mt-1 text-sm text-white md:text-lg">
              Ever wondered how we grow 4 acres of produce in just 1 acre?
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="flex w-full justify-center  items-center h-[70%]">
        <TechSlider />
      </div>
    </div>
  );
}

export default Technology;
