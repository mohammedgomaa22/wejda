import About from "@/components/home/About";
import MarketEng from "@/components/home/MarketEng";
import Parteners from "@/components/home/Parteners";
import ServicesHome from "@/components/home/ServicesHome";
import Slider from "@/components/home/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <About />
      <ServicesHome />
      <MarketEng />
      <Parteners />
    </main>
  );
}
