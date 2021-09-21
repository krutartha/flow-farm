import Crop from "../src/components/CropSlider";
import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";
import Technology from "../src/components/Technology";
import Crops from "../src/components/Crops";
import Contact from "../src/components/Contact";
import Map from "../src/components/Map";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="font-sans w-full bg-[#FAFAFA]">
      <Navbar />
      <div className="w-full">
        <Main />
        <Technology />
        <Crops />
        <Contact />
        {/* <Map /> */}
        <Footer />
      </div>
    </div>
  );
}
