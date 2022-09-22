function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLTQVnvKbCa8nFzrm29ITxcyFqXvt78gV3VwvnJL=s900-c-k-c0x00ffffff-no-rj"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Movie Night"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">Popular</li>
          <li className="headerLink">My Favourites</li>
        </ul>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
