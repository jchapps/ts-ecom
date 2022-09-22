import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { PlayIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import { HandThumbUpIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { Element, Genre } from "../typings";
import ReactPlayer from "react-player/lazy";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>();
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  console.log(trailer);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide "
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-blue-600"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-blue-600 px-8 text-xl font-bold font-black transition hover:bg-blue-400">
                <PlayIcon className="h-7 w-7 text-white" /> Play
              </button>

              <button className="modalButton">
                <PlusIcon className="h-7 w-7 " />
              </button>

              <button className="modalButton">
                <HandThumbUpIcon className="h-7 w-7 " />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <SpeakerXMarkIcon className="h-6 w-6" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
