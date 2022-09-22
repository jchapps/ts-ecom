import Head from "next/head";
import Image from "next/image";

function login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://4vector.com/i/free-vector-vector-clip-art-and-film-background_016395_cinema.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://www.svgrepo.com/show/166681/movie.svg"
        width={80}
        height={80}
        className="absolute cursor-pointer object-contain md:left-10 md:top-6"
        alt="Movie Night"
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:mx-w-md md:px-14">
        <h1 className="text-4xl text-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="password" className="input" />
          </label>
        </div>
        <button className="w-full rounded bg-blue-500 py-3 font-semibold ">
          Sign In
        </button>
        <div>
          <button
            type="submit"
            className="flex text-white hover:underline align-c"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
