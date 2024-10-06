import React from "react";

import TimeZone from "../../../components/navigasi/TimeZone";
import Navbar from "../../../components/navigasi/Navbar";
import ExistenceHero from "../../../components/existence/ExistenceHero";
import ExistenceNote from "../../../components/existence/ExistenceNote";
import ExistenceGalleryNote from "../../../components/existence/ExistenceGalleryNote";
import ExistenceArt from "../../../components/existence/ExistenceArt";
import ExistenceGalleryArt from "../../../components/existence/ExistenceGalleryArt";
import Footer from "../../../components/navigasi/Footer";
import PageLocation from "../../../components/navigasi/PageLocation";

export const metadata = {
  title: "EXISTENCE",
  description: "Part of their identity and life.",
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

      <section className="pb-10">
        <div>
          <ExistenceHero />
        </div>
      </section>

      <section className="flex-grow bg-white">
        <section className="py-10">
          <div>
            <ExistenceNote />
          </div>
        </section>

        <section className="py-10">
          <div>
            <ExistenceGalleryNote />
          </div>
        </section>

        <section className="py-10">
          <div>
            <ExistenceArt />
          </div>
        </section>

        <section className="py-10">
          <div>
            <ExistenceGalleryArt />
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
