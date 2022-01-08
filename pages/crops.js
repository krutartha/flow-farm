import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { cropByTech } from "../public/assets/cropPage";

import dynamic from "next/dynamic";
import CropLayout from "../src/components/CropLayout";

const Map = dynamic(() => import("../src/components/Map"), { ssr: false });

export default function CropsPage() {
  return (
    <div className="font-sans w-full bg-[#FAFAFA]">
      <Navbar />
      <div className="w-full">
        {/* text */}
        <div className="flex-col w-full items-center justify-center">
          <div className="flex py-5 px-16 w-full justify-center bg-[#365569] items-center">
            <div className="mt-2">
              <div className="flex w-full items-center justify-center text-4xl text-white">Crops</div>
            </div>
          </div>
        </div>
        {/* text */}
        <CropLayout cropByTech={cropByTech} />
        <Footer />
      </div>
    </div>
  );
}
