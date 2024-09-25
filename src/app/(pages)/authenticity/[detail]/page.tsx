import React from "react";
import Navbar from "../../../components/navigasi/Navbar";
import CheckID from "../../../components/searchID/CheckID";
import PageLocation from "../../../components/navigasi/PageLocation";

interface DetailItemProps {
  params: {
    detail: string;
  };
}

export const metadata = {
  title: "AUTHENTICITY",
  description: "Unique id code as a marker.",
};

const Page: React.FC<DetailItemProps> = ({ params }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-20">
          <Navbar
            picture="/logo/rvblack.png"
            colorsNavbar="bg-white bg-opacity-80"
            colorsText="text-black"
            colorsIcon="text-black"
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
          <PageLocation
            judul="REVORIONS"
            place="AUTHENTICITY"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
