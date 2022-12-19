import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import DropdownMenu from "./DropdownMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#000000]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://www.svgrepo.com/show/166681/movie.svg"
          width={70}
          height={70}
          className="cursor-pointer object-contain"
          alt="Movie Night"
        />

        <DropdownMenu/>

        <ul className="hidden space-x-4 md:flex">
          <Link href="/">
            <li className="headerLink">Trailers</li>
          </Link>

          <li className="headerLink">My Favourites</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-md font-light">
        <ArrowUpIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">
          <a href="/login">Log In</a>
        </p>
        <BellIcon className="hidden h-6 w-6 sm:inline" />
        <Link href="/account">
          <img
            onClick={logout}
            src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png"
            className="cursor-pointer rounded h-10 w-10"
            alt="Profile"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
