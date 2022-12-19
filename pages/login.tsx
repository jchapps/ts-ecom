import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-white md:items-center md:justify-center md:bg-transparent">
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:mx-w-md md:px-14"
      >
        <h1 className="text-4xl text-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] text-yellow-200">
                Enter a valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] text-yellow-200">
                Enter a valid password
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-blue-500 py-3 font-semibold "
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray] text-center">
          First time here?{' '}
          <button
            type="submit"
            className="cursor-pointer text-white hover:underline hover:text-blue-500"
            onClick={() => setLogin(false)}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
