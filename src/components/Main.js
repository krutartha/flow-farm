import React from "react";
import Typical from "react-typical";

function Main() {
  return (
    <div className="bg-black">
      <img className="w-full bg-blend-overlay object-cover opacity-40 h-[41rem]" src={"/assets/hydroponics.jpg"} />
      <div class="absolute w-full offset-x-[50%] inset-y-[50%] text-white text-4xl text-center font-mono sm:text-2xl lg:text-4xl">
        <Typical steps={["THE FUTURE OF FARMING IS HERE", 1000]} />
        <div className="mt-4 text-2xl">Take a look inside the new ways of farming that helps grow healthier and cleaner produce</div>
      </div>
    </div>
  );
}

export default Main;
