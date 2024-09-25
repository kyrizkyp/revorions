import Navbar from "./components/navigasi/Navbar";
import HomeHero from "./components/homepage/HomeHero";

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
            colorsNavbar="bg-black bg-opacity-80"
            colorsText="text-white"
            colorsIcon="text-white"
          />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>
    </main>
  );
}
