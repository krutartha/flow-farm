import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { technology } from "../../public/assets/technology";

SwiperCore.use([Navigation]);

function TechSlider({ name, text1, text2, imgUrl, height }) {
  return (
    <div className="w-[80%]">
      <Swiper className="p-10 w-full h-full" navigation={true}>
        {technology.map((i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex w-full h-[26rem] justify-center items-center">
                <div className="w-[60%]">
                  <img src={i.imgUrl} />
                </div>
                <div className="p-3 w-[40%]">
                  <div className="flex w-full justify-center text-4xl sm:text-2xl">{i.name}</div>
                  <div className="mt-10 flex w-full justify-center text-lg sm:text-sm sm:mt-2">{i.text}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TechSlider;
