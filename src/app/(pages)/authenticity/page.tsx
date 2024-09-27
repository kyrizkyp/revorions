import React from "react";
import { Metadata } from "next";

import TimeZone from "../../components/navigasi/TimeZone";
import Navbar from "../../components/navigasi/Navbar";
import Authenticity from "../../components/authenticity/Authenticity";
import SearchValidID from "../../components/searchID/SearchValidID";
import AuthenticityProtection from "../../components/authenticity/AuthenticityProtection";
import Footer from "../../components/navigasi/Footer";
import PageLocation from "../../components/navigasi/PageLocation";

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
            colorsNavbar="bg-white"
            colorsText="text-black"
            colorsTextDropdown="text-black"
            colorsTextScroll="text-black"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-14 lg:pt-28">
          <div>
            <Authenticity />
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-xl">
              <p className="font-mono text-sm text-center">
                Enter the 12-digit RV code in the label tag column below without
                using the hyphen &quot;-&quot;.
              </p>
            </div>

            <div className="py-4">
              <SearchValidID />
            </div>

            <div className="pt-4">
              <img
                src="https://fastly.picsum.photos/id/894/800/400.jpg?hmac=WwXq08kJHbrCjuZcjFyLCXViBRm-7gedR44Hk1HyykA"
                alt="ID"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <AuthenticityProtection />
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
          <PageLocation
            place="AUTHENTICITY"
            classText="text-black"
            bgColor="bg-white"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
