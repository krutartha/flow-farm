import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { crops } from "../../public/assets/crops";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function CropSlider() {
  return (
    <div className="w-[90%] md:w-[80%]">
      {crops.map((i) => {
        return (
          <div className="w-full">
            <Swiper className="mt-10 w-full h-full md:p-10" navigation={true}>
              {i.map((j) => {
                return (
                  <SwiperSlide>
                    <div className="w-full justify-center items-center md:flex md:h-[16rem]">
                      <div className="w-full md:w-[40%]">
                        <img className="object-cover" src={j.imgUrl} />
                      </div>
                      <div className="p-3 w-full md:w-[60%]">
                        <div className="flex w-full justify-center text-3xl sm:text-2xl lg:text-3xl">{j.name}</div>
                        <div className="mt-2 flex w-full justify-center text-md md:mt-10 ">{j.text}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}

export default CropSlider;
