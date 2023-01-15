import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [selected, setSelected] = useState("");
  return (
    <header className="text-gray-600 body-font shadow-md sticky top-0 z-10 bg-slate-100 ">
      <div className="container mx-auto flex flex-wrap p-2.5 flex-col md:flex-row items-center">
        <Link
          to="/whatshot"
          className="flex title-font font-medium items-center text-gray-900 bg-orange-400 rounded-xl p-2 mb-4 md:mb-0"
        >
          <span className=" text-xl">Movie-db</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center xl:mr-28">
          <Link
            onClick={() => setSelected("newMovies")}
            to="/new-releases"
            className={
              selected === "newMovies"
                ? "mr-5 hover:text-gray-900 cursor-pointer bg-orange-400 rounded-md p-1"
                : "mr-5 hover:text-gray-900 cursor-pointer"
            }
          >
            New movies
          </Link>
          <Link
            onClick={() => setSelected("whatsHot")}
            to="/whatshot"
            className={
              selected === "whatsHot"
                ? "mr-5 hover:text-gray-900 cursor-pointer bg-orange-400 rounded-md p-1"
                : "mr-5 hover:text-gray-900 cursor-pointer"
            }
          >
            What's hot
          </Link>
        </nav>
      </div>
      <Link></Link>
    </header>
  );
}

export default Header;
