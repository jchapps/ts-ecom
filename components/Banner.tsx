import { useEffect, useState } from "react";
import { Movie } from "../typings";
import { baseUrl } from "../constants/Movie";
import Image from "next/image";
import { FilmIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-shadow-sm">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-sm md:max-w-lg md:text-base lg:max-w-2xl lg:base ">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-blue-600">
          <FilmIcon className="h-4 w-4 md:h-7 md:w-7" />
          Watch
        </button>
        <button
          className="bannerButton bg-blue-600"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <InformationCircleIcon className="h-4 w-4 md:h-7 md:w-7" />
          Info
        </button>
      </div>
    </div>
  );
}

export default Banner;
