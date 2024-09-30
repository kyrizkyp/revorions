import React from "react";

import TimeZone from "../../../components/navigasi/TimeZone";
import Navbar from "../../../components/navigasi/Navbar";
import HistoryHero from "../../../components/history/HistoryHero";
import HistoryNote from "../../../components/history/HistoryNote";
import HistoryGalleryNote from "../../../components/history/HistoryGalleryNote";
import HistoryArt from "../../../components/history/HistoryArt";
import HistoryGalleryArt from "../../../components/history/HistoryGalleryArt";
import Footer from "../../../components/navigasi/Footer";
import PageLocation from "../../../components/navigasi/PageLocation";

export const metadata = {
  title: "HISTORY",
  description: "Every era has history and innovation.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section>
        <div className="fixed w-full z-50">
          <TimeZone />
        </div>

        <div className="fixed z-20 w-full py-8">
          <Navbar
            picture="/logo/rvwhite.png"
            pictureDropdown="/logo/rvblack.png"
            pictureScroll="/logo/rvblack.png"
            colorsLang="border-white"
            colorsLangDropdown="border-black"
            colorsLangScroll="border-black"
            colorsNavbar="bg-white"
            colorsText="text-white"
            colorsTextScroll="text-black"
            colorsTextDropdown="text-black"
          />
        </div>
      </section>

      <section>
        <div>
          <HistoryHero />
        </div>
      </section>

      <section className="flex-grow bg-white">
        <section className="pt-16">
          <div>
            <HistoryNote />
          </div>
        </section>

        <section className="py-20">
          <div>
            <HistoryGalleryNote />
          </div>
        </section>

        <section className="pt-16">
          <div>
            <HistoryArt />
          </div>
        </section>

        <section className="py-20">
          <div>
            <HistoryGalleryArt />
          </div>
        </section>
      </section>

      <section className="w-full bg-black">
        <div>
          <Footer bgColor="bg-black" textColor="text-white" />
        </div>

        <div>
          <PageLocation
            place="HISTORY"
            classText="text-white"
            bgColor="bg-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
