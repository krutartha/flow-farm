import React from "react";
import TechSlider from "./TechSlider";

function Technology() {
  return (
    <div className="w-full h-[41rem]">
      {/* text */}
      <div className="flex-col p-12 w-full items-center justify-center">
        <div className="flex text-4xl justify-center">TECHNOLOGY</div>
        <div className="flex mt-6 text-md justify-center">Ever wondered how we grow 4 acres of produce in just 1 acre?</div>
      </div>
      {/* slider */}
      <div className="flex w-full justify-center  h-[60%]">
        <TechSlider />
      </div>
    </div>
  );
}

export default Technology;
