import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../assets/logo.png";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="sticky top-0 w-full z-10">
      <div
        className={`font-Poppins bg-karanGrey flex justify-between items-center p-4 text-karanWhite `}
      >
        {/* Left */}
        <div className="">
          <a href="#" className="flex gap-1 items-center">
            <img src={logo} className="w-[60px] object-contain" />
            <h1 className="font-bold text-3xl">PumpPeak</h1>
          </a>
        </div>
        {/* Middle */}
        <div className=" gap-6 items-center lg:flex hidden">
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#about"
          >
            ABOUT US
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#staff-details"
          >
            COACHES
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#training"
          >
            TRAINING TYPE
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#review"
          >
            REVIEWS
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#"
          >
            SPORTS NUTRITION
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#faq"
          >
            FAQ
          </a>
          <a
            className="text-[13px] hover:border-b-2 hover:font-bold border-karanYellow"
            href="#contctUs"
          >
            CONTACTS
          </a>
        </div>
        {/*Right */}
        <div className="flex items-center gap-3">
          <a href="#signUp">
            <button className=" border-2 border-karanYellow rounded-xl p-2 font-semibold">
              Sign Up
            </button>
          </a>
          <div
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className="lg:hidden cursor-pointer"
          >
            <RiMenu3Fill size={35} />
          </div>
        </div>
      </div>
      {/* Toggle nav items when screeen is small */}
      <div
        className={`flex flex-col gap-3 lg:hidden absolute top-19 right-0 bg-karanGrey text-white font-semibold p-3 ${
          !toggleNav && "hidden"
        }`}
      >
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#about"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          ABOUT US
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#staff-details"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          COACHES
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#training"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          TRAINING TYPE
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#review"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          REVIEWS
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          SPORTS NUTRITION
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#faq"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          FAQ
        </a>
        <a
          className="text-[13px] hover:border-b-2 border-karanYellow"
          href="#contctUs"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          CONTACTS
        </a>
      </div>
    </div>
  );
}

export default Header;
