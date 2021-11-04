import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { cropByTech } from "../public/assets/cropPage";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../src/components/Map"), { ssr: false });

export default function CropsPage() {
  return (
    <div className="font-sans w-full bg-[#FAFAFA] h-auto">
      <Navbar />
      <div className="w-full">
        {/* text */}
        <div className="flex-col p-8 w-full items-center justify-center">
          <div className="flex text-4xl justify-center">Crops</div>
        </div>
        {cropByTech.map((i) => {
          return (
            <div>
              <div className="flex justify-start p-5 text-xl">{i.technology}</div>
              {i.crops.map((j) => {
                return <div className="p-2 text-lg">{j.name}</div>;
              })}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
