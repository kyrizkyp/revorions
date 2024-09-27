import React from "react";
import { Metadata } from "next";

import TimeZone from "../../../components/navigasi/TimeZone";
import Navbar from "../../../components/navigasi/Navbar";
import CheckID from "../../../components/searchID/CheckID";
import Footer from "../../../components/navigasi/Footer";
import PageLocation from "../../../components/navigasi/PageLocation";

interface DetailItemProps {
  params: {
    detail: string;
  };
}

export const metadata: Metadata = {
  title: "AUTHENTICITY",
  description: "Unique id code as a marker.",
};

const Page: React.FC<DetailItemProps> = ({ params }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-50">
          <TimeZone />
        </div>

        <div className="fixed w-full z-20 py-8">
          <Navbar
            picture="/logo/rvblack.png"
            pictureScroll="/logo/rvwhite.png"
            colorsNavbar="bg-black"
            colorsText="text-black"
            colorsTextScroll="text-white"
            colorsIcon="text-black"
            colorsIconScroll="text-white"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section>
          <div>
            <CheckID detaiID={params.detail} />
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

export default Page;
