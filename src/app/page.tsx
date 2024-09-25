import Navbar from "./components/navigasi/Navbar";
import HomeHero from "./components/homepage/HomeHero";
import Footer from "./components/navigasi/Footer";
import PageLocation from "./components/navigasi/PageLocation";

export const metadata = {
  title: "REVORIONS",
  description: "Liven up every moment with a revolutionary fashion twist.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative">
        <div className="fixed w-full z-40">
          <Navbar
            picture="/logo/rvwhite.png"
            pictureScroll="/logo/rvblack.png"
            colorsNavbar="bg-white bg-opacity-80"
            colorsText="text-white"
            colorsTextScroll="text-black"
            colorsIcon="text-white"
            colorsIconScroll="text-black"
          />
        </div>

        <div className="top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>

      <section>
        <div>
          <Footer bgColor="bg-white" textColor="text-black" />
        </div>
      </section>

      <section>
        <PageLocation place="HOME" classText="text-white" bgColor="bg-black" />
      </section>
    </main>
  );
}
