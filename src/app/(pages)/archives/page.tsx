import React from "react";

import Navbar from "../../components/navigasi/Navbar";
import Archives from "../../components/archives/Archives";
import ArchivesMobile from "../../components/archives/ArchivesMobile";
import ArchivesMedium from "../../components/archives/ArchivesMedium";
import Footer from "../../components/navigasi/Footer";
import PageLocation from "../../components/navigasi/PageLocation";

export const metadata = {
  title: "ARCHIVES",
  description: "Each collection is a story",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <section className="relative">
        <div className="fixed w-full z-20">
          <Navbar
            picture="/logo/rvwhite.png"
            colorsNavbar="bg-black bg-opacity-80"
            colorsText="text-white"
            colorsIcon="text-white"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-14 lg:pt-28">
          <div>
            <Archives />
          </div>
        </section>

        <section className="py-4">
          <div className="block md:hidden">
            <ArchivesMobile />
          </div>

          <div className="hidden md:block">
            <ArchivesMedium />
          </div>
        </section>
      </section>

      <section>
        <div>
          <Footer bgColor="bg-black" textColor="text-white" />
        </div>
      </section>

      <section>
        <div>
          <PageLocation place="ARCHIVES" classText="text-white" />
        </div>
      </section>
    </main>
  );
};

export default page;
