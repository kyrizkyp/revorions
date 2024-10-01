import React from "react";
import { Metadata } from "next";

import TimeZone from "../../../components/navigasi/TimeZone";
import Navbar from "../../../components/navigasi/Navbar";
import Archives from "../../../components/archives/Archives";
import ArchivesMobile from "../../../components/archives/ArchivesMobile";
import ArchivesMedium from "../../../components/archives/ArchivesMedium";
import Footer from "../../../components/navigasi/Footer";
import PageLocation from "../../../components/navigasi/PageLocation";

export const metadata: Metadata = {
  title: "ARCHIVES",
  description: "Each collection is a story",
};

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-50">
          <TimeZone />
        </div>

        <div className="fixed w-full z-20 py-8">
          <Navbar
            picture="/logo/rvblack.png"
            pictureDropdown="/logo/rvblack.png"
            pictureScroll="/logo/rvblack.png"
            colorsLang="border-black"
            colorsLangDropdown="border-black"
            colorsLangScroll="border-black"
            colorsNavbar="bg-white"
            colorsText="text-black"
            colorsTextDropdown="text-black"
            colorsTextScroll="text-black"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-28 pb-10">
          <div>
            <Archives />
          </div>
        </section>

        <section className="py-10">
          <div className="block md:hidden">
            <ArchivesMobile />
          </div>

          <div className="hidden md:block">
            <ArchivesMedium />
          </div>
        </section>
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
};

export default Page;
