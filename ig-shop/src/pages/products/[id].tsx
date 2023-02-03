import { stripe } from "@/src/lib/stripe";
import { formatterPrice } from "@/src/utils/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Loading from "../../assets/Loading.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Products({ product }: ProductProps) {
const [isCreatingCheckouSession, setIsCreatingCheckoutSession] = useState(false)

  async function handlerCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl
    } catch (err) {
      alert("erro ao tentar entrar na tela de pagamento");
    }
  }

  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <main className="flex items-center justify-center m-auto">
        <Image
          src={Loading}
          width={100}
          height={100}
          alt=""
          className="mt-60"
        ></Image>
      </main>
    );
  }
  return (
    <main className="grid grid-cols-2 gap-16 max:w-296 mx-auto my-12">
      <Image
        src={product.imageUrl}
        className="w-96 h-full rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500 md:mx-auto mx-8"
        alt={product.name}
        width={200}
        height={280}
      />
      <div className="flex flex-col pr-8">
        <h1 className="text-2xl text-grayR-300">{product.name}</h1>
        <span className="mt-4 block text-2xl text-greenR-300">
          {product.price}
        </span>
        <p className="mt-9 text-xl text-grayR-300">{product.description}</p>
        <button disabled={isCreatingCheckouSession}
          className={`mt-auto bg-greenR-500 text-white rounded-lg p-5 hover:bg-greenR-300 ${isCreatingCheckouSession ? 'cursor-not-allowed opacity-70' : ''}`}
          onClick={handlerCheckout}
        >
          Comprar agora
        </button>
      </div>
    </main>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Buscar o que for mais acessados pelo usuario
    paths: [{ params: { id: "prod_NGatSpIch7wPnQ" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatterPrice.format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
