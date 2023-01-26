import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Anime01 from "../assets/anime01.jpg";
import Anime02 from "../assets/anime02.jpg";
import Anime03 from "../assets/anime03.jpg";
import Anime04 from "../assets/anime04.jpg";
export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 36
    }
  })
  return (
    <main className="flex calculate-width w-full ml-auto min:h-164 keen-slider" ref={sliderRef}>
      <a
        href=""
        className="relative flex items-center justify-center overflow-hidden footer-a keen-slider__slide"
      >
        <Image
          src={Anime01}
          className="w-full h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
          alt=""
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center bg-slate-900/60 opacity-0 p-8 translate-y-110 transition-all ease-in-out duration-200">
          <strong className="text-xl">Boneco anime</strong>
          <span className="font-bold text-greenR-300 text-xl">R$ 199,90</span>
        </footer>
      </a>

      <a
        href=""
        className="relative flex items-center justify-center overflow-hidden footer-a keen-slider__slide"
      >
        <Image
          src={Anime02}
          className="w-full h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
          alt=""
        />
        <footer className="absolute bottom-1 left-1 right-1 min:h-164 rounded-md flex justify-between items-center bg-slate-900/60 opacity-0 p-8 translate-y-110 transition-all ease-in-out duration-200">
          <strong className="text-xl">Boneco anime</strong>
          <span className="font-bold text-greenR-300 text-xl">R$ 199,90</span>
        </footer>
      </a>
      <a
        href=""
        className="relative flex items-center justify-center overflow-hidden footer-a keen-slider__slide"
      >
        <Image
          src={Anime03}
          className="w-full h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
          alt=""
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center bg-slate-900/60 opacity-0 p-8 translate-y-110 transition-all ease-in-out duration-200">
          <strong className="text-xl">Boneco anime</strong>
          <span className="font-bold text-greenR-300 text-xl">R$ 199,90</span>
        </footer>
      </a>
      <a
        href=""
        className="relative flex items-center justify-center overflow-hidden footer-a keen-slider__slide"
      >
        <Image
          src={Anime04}
          className="w-full h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
          alt=""
        />
        <footer className="absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center bg-slate-900/60 opacity-0 p-8 translate-y-110 transition-all ease-in-out duration-200">
          <strong className="text-xl">Boneco anime</strong>
          <span className="font-bold text-greenR-300 text-xl">R$ 199,90</span>
        </footer>
      </a>
    </main>
  );
}
