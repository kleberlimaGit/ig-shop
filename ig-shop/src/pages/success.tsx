import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import Imagem from "../assets/anime01.jpg";
import { stripe } from "../lib/stripe";

interface SuccessProps {
  costumerName: string;
  sellDetails: string;
  product: {
    imageUrl: string
  };
}

export default function Success(props: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
      </Head>
      <main className="flex flex-col items-center justify-center mx-auto h-164">
        <h1 className="text-4xl font-bold text-grayR-100 mb-12">
          Compra Efetuada
        </h1>
        <Image
          src={props.product.imageUrl}
          alt={props.sellDetails}
          width={480}
          height={520}
          className="w-48 h-52 rounded-lg border-solid border-2 shadow-md border-greenR-300 shadow-greenR-500"
        />

        <p className="text-xl text-grayR-300 max:w-128 mt-8">
          Uhuul <strong>{props.costumerName}</strong>, seu{" "}
          <strong>{props.sellDetails}</strong> já esta a caminho da sua casa
        </p>
        <Link
          href="/"
          className="block mt-20 text-green-500 text-lg hover:text-greenR-300"
        >
          Voltar ao catálogo
        </Link>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details?.name;
  const sellDetails = session.line_items?.data[0].description;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      costumerName,
      sellDetails,
      product: {
        imageUrl: product.images[0]
      },
    },
  };
};
