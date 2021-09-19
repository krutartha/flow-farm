import React from "react";
import Typical from "react-typical";

function Main() {
  return (
    <div className="bg-black">
      <img className="w-full h-[41rem] bg-blend-overlay object-cover opacity-40" src={"/assets/hydroponics.jpg"} />
      <div class="absolute bottom-[19rem] w-full inset-x-0 text-white text-4xl text-center font-mono">
        <Typical steps={["THE FUTURE OF FARMING IS HERE", 1000]} />
        <div className="mt-4 text-2xl">Take a look inside the new ways of farming that helps grow healthier and cleaner produce</div>
      </div>
    </div>
  );
}

export default Main;
