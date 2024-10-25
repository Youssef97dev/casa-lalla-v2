import Hero from "@/components/Hero";
import About from "@/components/About";
import Swiping from "@/components/Swiping";
import Talk from "@/components/Talk";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-0">
      <Hero />
      <Swiping />
      <About />
      <Talk />
    </div>
  );
}
