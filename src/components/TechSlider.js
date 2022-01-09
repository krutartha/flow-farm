import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { technology } from "../../public/assets/technology";

SwiperCore.use([Navigation]);

function TechSlider({ name, text1, text2, imgUrl, height }) {
  return (
    <div className="w-[90%] md:w-[80%]">
      <Swiper className="p-10 w-full h-full " navigation={true}>
        {technology.map((i) => {
          return (
            <SwiperSlide key={i}>
              <div className="md:flex w-full md:h-[26rem] justify-center items-center">
                <div className="w-full md:w-[60%]">
                  <img src={i.imgUrl} />
                </div>
                <div className="flex-col md:p-3 md:w-[40%] items-center">
                  <div className="flex w-full justify-center text-2xl md:text-4xl sm:text-2xl">{i.name}</div>
                  <div className="h-auto p-2 mt-2 md:mt-10 flex w-full justify-center text-sm md:text-lg sm:text-sm sm:mt-2">{i.text}</div>
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
