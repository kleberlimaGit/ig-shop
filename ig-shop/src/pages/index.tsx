import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Link from 'next/link'
import Stripe from "stripe";
import { formatterPrice } from "../utils/utils";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 36,
    },
  });
  return (
    <main
      className="flex calculate-width w-full ml-auto min:h-164 keen-slider"
      ref={sliderRef}
    >
      {products.map((product) => {
        return (
          
          <Link prefetch={false}
            key={product.id}
            href={`/products/${product.id}`}
            className="relative flex items-center justify-center overflow-hidden footer-a keen-slider__slide"
          >
            <Image
              src={product.imageUrl}
              className="w-full h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
              alt=""
              width={540}
              height={480}
            />
            <footer className="absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center bg-slate-900/60 opacity-0 p-8 translate-y-110 transition-all ease-in-out duration-200">
              <strong className="text-xl">{product.name}</strong>
              <span className="font-bold text-greenR-300 text-xl">
                {product.price}
              </span>
            </footer>
          </Link>
        );
      })}
    </main>
  );
}

/** GetServerSideProps sempre é usado para mostrar informaçoes cruciais antes de renderizar a tela ou
 *  para esconder chamadas de api do usuario final
 * 
 * GetStaticProps cria uma pagina statica no momento do build do projeto deve ser utilizado quando uma pagina deve ser comum a todos os usuarios
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data
    .map((product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatterPrice.format(price.unit_amount! / 100),
      };
    })
  return {
    props: {
      products,
    },
    revalidate: 60*60*2
  };
};
