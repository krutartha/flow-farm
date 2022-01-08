import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";
import Technology from "../src/components/Technology";
import Crops from "../src/components/Crops";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

import Head from "next/head";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../src/components/Map"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans w-full bg-[#FAFAFA] ">
      <Head>
        <title>Flow Farm Technologies</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Navbar />
      <div className="w-full">
        <Main />
        <Technology id="technology" />
        <Crops id="crops" />
        <Contact id="contact" />
        <Map id="map" />
        <Footer />
      </div>
    </div>
  );
}
