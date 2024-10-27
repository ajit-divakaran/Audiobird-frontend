import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons/faHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // const handleMenuClick = () =>{
  //     if(isMenuClicked){
  //         se
  //     }
  // }
  return (
    <div className="block md:flex justify-between items-center bg-black">
      <div className="flex w-full md:w-auto justify-between">
        <img
          src="/images/cover-removebg-preview.png"
          alt=""
          width={"170px"}
          height={"0.8rem"}
        />

        <button
          className="px-4 scale-150 rounded md:hidden mr-4"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
      </div>
      <div
        className={`${
          isMenuClicked ? "block" : "hidden"
        } md:flex gap-x-2 items-center`}
      >
        <Link to={"/"}>
          <a
            href=""
            className={`${
              isMenuClicked ? "mb-3" : ""
            } ml-4 md:ml-0 text-white block`}
          >
            Home
          </a>
        </Link>
        <Link to={"/watchlist"}>
          <a
            href=""
            className={`${
              isMenuClicked ? "mb-3" : ""
            } ml-4 md:ml-0 text-white block`}
          >
            Watchlist
          </a>
        </Link>{" "}
      </div>
      <div
        className={`${
          isMenuClicked ? "pb-8" : "hidden"
        } md:block ml-4 md:ml-0 mr-6`}
      >
        <button className="text-white">
          <FontAwesomeIcon icon={faHistory} className="mr-2" />
          Watch History
        </button>
      </div>
    </div>
  );
};

export default Header;
