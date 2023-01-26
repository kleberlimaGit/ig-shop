import "./styles/global.css";
import type { AppProps } from "next/app";
import Image from 'next/image'
import LogoImg from '../assets/logo.svg';
export default function App({ Component, pageProps }: AppProps) {
  return(
  <div className="flex flex-col items-start min:h-screen justify-center">
    <header className="py-8 w-full calculate-width ml-auto">
      <Image src={LogoImg} alt="" />
    </header>
    <Component {...pageProps} />
  </div>
  )
}
