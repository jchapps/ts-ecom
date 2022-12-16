import { CheckIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

const Plans = () => {
  const {logout} = useAuth()

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
        <button className="text-lg font-medium hover:underline" onClick={logout}>Sign Out</button>
      </header>
      <main className="max-w-5xl pt-28 px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">Select a plan</h1>
        <ul>
          <li className="plan-info">
            <CheckIcon className="check" /> Unlimited Viewing.
          </li>
          <li className="plan-info">
            <CheckIcon className="check" /> Original Content.
          </li>
          <li className="plan-info">
            <CheckIcon className="check" /> Cancel Anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            <div className="planBox">plan a</div>
            <div className="planBox">plan b</div>
            <div className="planBox">plan c</div>
          </div>
          {/* <Table/> */}

          <button>Subcribe Now</button>
        </div>
      </main>
    </>
  );
};

export default Plans;
