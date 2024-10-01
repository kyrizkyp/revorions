import React from "react";
import { Metadata } from "next";

import TimeZone from "../../../components/navigasi/TimeZone";
import Navbar from "../../../components/navigasi/Navbar";
import Authenticity from "../../../components/authenticity/Authenticity";
import SearchValidID from "../../../components/searchID/SearchValidID";
import AuthenticityProtection from "../../../components/authenticity/AuthenticityProtection";
import Footer from "../../../components/navigasi/Footer";
import PageLocation from "../../../components/navigasi/PageLocation";

export const metadata: Metadata = {
  title: "AUTHENTICITY",
  description: "Unique id code as a marker.",
};

const page = () => {
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
            <Authenticity />
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <SearchValidID />
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <AuthenticityProtection />
          </div>
        </section>
      </section>

      <section className="w-full bg-black">
        <div>
          <Footer bgColor="bg-black" textColor="text-white" />
        </div>

        <div>
          <PageLocation
            place="AUTHENTICITY"
            classText="text-white"
            bgColor="bg-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
