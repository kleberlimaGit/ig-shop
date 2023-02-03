import Image from "next/image";
import Link from "next/link";
import Imagem from '../assets/anime01.jpg'

export default function Success() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto h-164">
      <h1 className="text-4xl font-bold text-grayR-100 mb-12">Compra Efetuada</h1>
      <Image src={Imagem} alt="" className="w-48 h-52 rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500" />

      <p className="text-xl text-grayR-300 max:w-128 mt-8">
        Uhuul <strong>Kleber Lima</strong>, seu <strong>Boneco Gaara</strong> já
        esta a caminho da sua casa
      </p>
      <Link href="/" className="block mt-20 text-green-500 text-lg hover:text-greenR-300">Voltar ao catálogo</Link>
    </main>
  );
}
