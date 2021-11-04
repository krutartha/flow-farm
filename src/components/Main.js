import React from "react";
import Typical from "react-typical";

function Main() {
  return (
    <div className="bg-black">
      <img className="w-full bg-blend-overlay object-cover opacity-40 h-[41rem]" src={"/assets/hydroponics.jpg"} />
      <div class="absolute w-full offset-x-[50%] inset-y-[30%] text-white text-4xl text-center font-mono md:text-4xl md:inset-y-[50%]">
        <Typical steps={["THE FUTURE OF FARMING IS HERE", 1000]} />
        <div className="mt-10 text-lg p-4">
          A hydroponics farm that establishes itself to grow healthy and hygienic produce daily with essential nutrients and values. We are B2B
          wholesale vendors and suppliers to hotels and caterers. Specialising in setting up high value to cost hydroponics equipment, hence also
          giving you consultancy and engineering services towards your own farm. We also buy your produce to ease your hydroponics journey.
        </div>
      </div>
    </div>
  );
}

export default Main;
