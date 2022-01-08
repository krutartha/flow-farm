import React from "react";

function CropLayout({ cropByTech }) {
  return (
    <div className="w-full h-auto">
      {cropByTech.map((i) => {
        return (
          //outer div
          <div className="">
            <div className="flex justify-center p-5 text-4xl font-bold w-full ">{i.technology}</div>
            <div className="grid grid-cols-1 gap-2 place-content-center md:grid-cols-4">
              {i.crops.map((j) => {
                return (
                  <div className="flex-col justify-center items-center p-2 text-xl">
                    <div className="p-2 w-full">
                      <img className="object-cover" src={j.image} />
                    </div>
                    <div className="w-full flex items-center justify-center">{j.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CropLayout;
