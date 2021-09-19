import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { crops } from "../../public/assets/crops";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function CropSlider() {
  return (
    <div className="w-[80%]">
      {crops.map((i) => {
        return (
          <div className="w-full">
            <Swiper className="mt-10 p-10 w-full h-full" navigation={true}>
              {i.map((j) => {
                return (
                  <SwiperSlide>
                    <div className="flex w-full h-[16rem]">
                      <div className="w-[40%]">
                        <img className="object-fit" src={j.imgUrl} />
                      </div>
                      <div className="p-3 w-[60%]">
                        <div className="flex w-full justify-center text-3xl">{j.name}</div>
                        <div className="mt-10 flex w-full justify-center text-md">{j.text}</div>
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
