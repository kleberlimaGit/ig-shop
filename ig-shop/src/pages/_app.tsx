import "./styles/global.css";
import type { AppProps } from "next/app";
import Image from 'next/image'
import LogoImg from '../assets/logo.svg';
export default function App({ Component, pageProps }: AppProps) {
  return(
  <div className="flex flex-col items-center min:h-screen justify-start">
    <header className="py-8 px-0 w-full max:w-296 mx-auto my-0">
      <Image src={LogoImg} alt="" />
    </header>
    <Component {...pageProps} />
  </div>
  )
}
