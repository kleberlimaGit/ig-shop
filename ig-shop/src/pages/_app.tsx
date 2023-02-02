import "./styles/global.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import LogoImg from "../assets/logo.svg";
import Link from "next/link";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start min:h-screen justify-center">
      <header className="py-8 w-full calculate-width ml-auto">
        <Link href={`/`} prefetch={false}>
          <Image src={LogoImg} alt="" />
        </Link>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
