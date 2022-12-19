import { CheckIcon } from "@heroicons/react/20/solid";
import { Product } from "@stripe/firestore-stripe-payments";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { loadCheckout } from "../lib/stripe";
import Loader from "./Loader";
import Table from "./Table";

interface Props {
  products: Product[];
}

const Plans = ({ products }: Props) => {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[1]);
  const [billingLoading, setBillingLoading] = useState(false);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0].id!);
    setBillingLoading(true);
  };

  return (
    <>
      <Head>
        <title>Blue Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <img
            src="https://www.svgrepo.com/show/166681/movie.svg"
            width={70}
            height={70}
            className="cursor-pointer object-contain"
            alt="Movie Night"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="max-w-5xl  mx-auto pt-28 px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium text-center">Select a plan</h1>
        <div className="flex justify-around">
            <li className="plan-info">
              <CheckIcon className="check" /> Unlimited Viewing
            </li>
            <li className="plan-info">
              <CheckIcon className="check" /> Original Content
            </li>
            <li className="plan-info">
              <CheckIcon className="check" /> Cancel Anytime
            </li>
        </div>
        <div className="mt-9 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || billingLoading}
            className={`mx-auto w-11/12 rounded bg-blue-700 py-4 text-xl shadow hover:bg-blue-600 md:w-[420px] ${
              billingLoading && "opacity-60"
            }`}
            onClick={subscribeToPlan}
          >
            {billingLoading ? <Loader /> : "Subscribe"}
          </button>
        </div>
      </main>
    </>
  );
};

export default Plans;
