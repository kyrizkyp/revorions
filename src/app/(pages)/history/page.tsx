import React from "react";

import TimeZone from "../../components/navigasi/TimeZone";
import Navbar from "../../components/navigasi/Navbar";
import HistoryHero from "../../components/history/HistoryHero";
import History from "../../components/history/History";
import HistoryNote from "../../components/history/HistoryNote";
import HistoryGallery from "../../components/history/HistoryGallery";
import HistoryDNA from "../../components/history/HistoryDNA";
import Footer from "../../components/navigasi/Footer";
import PageLocation from "../../components/navigasi/PageLocation";

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

      <section>
        <History />
      </section>

      <section className="flex-grow bg-white">
        <section className="pt-14">
          <div>
            <HistoryNote />
          </div>
        </section>

        <section className="py-14">
          <div>
            <HistoryGallery />
          </div>
        </section>

        <section className="pb-14">
          <div>
            <HistoryDNA />
          </div>
        </section>
      </section>

      <section>
        <div>
          <Footer bgColor="bg-black" textColor="text-white" />
        </div>
      </section>

      <section className="w-full bg-white">
        <div>
          <PageLocation
            place="HISTORY"
            classText="text-black"
            bgColor="bg-white"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
