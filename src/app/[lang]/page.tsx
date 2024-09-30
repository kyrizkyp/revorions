import { Metadata } from "next";

import TimeZone from "../components/navigasi/TimeZone";
import Navbar from "../components/navigasi/Navbar";
import HomeHero from "../components/homepage/HomeHero";
import Footer from "../components/navigasi/Footer";
import PageLocation from "../components/navigasi/PageLocation";

export const metadata: Metadata = {
  title: "REVORIONS",
  description: "Liven up every moment with a revolutionary fashion twist.",
};

export default function Home({}: { params: { lang: string } }) {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative">
        <div className="fixed w-full z-50">
          <TimeZone />
        </div>

        <div className="fixed w-full z-40 py-8">
          <Navbar
            picture="/logo/rvwhite.png"
            pictureDropdown="/logo/rvblack.png"
            pictureScroll="/logo/rvblack.png"
            colorsLang="border-white"
            colorsLangDropdown="border-black"
            colorsLangScroll="border-black"
            colorsNavbar="bg-white"
            colorsText="text-white"
            colorsTextDropdown="text-black"
            colorsTextScroll="text-black"
          />
        </div>

        <div className="top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>

      <section className="w-full bg-black">
        <div>
          <Footer bgColor="bg-black" textColor="text-white" />
        </div>

        <div>
          <PageLocation
            place="H01-1"
            classText="text-white"
            bgColor="bg-black"
          />
        </div>
      </section>
    </main>
  );
}
