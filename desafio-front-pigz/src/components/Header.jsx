import React from "react";
import LogoPigz from "../lib/Pigz Gestão - Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between h-28 px-8 py-4 items-end">
        <div className="">
        <img src={LogoPigz} alt="/"/>
        </div>
      <div className="">
        <button className="px-6 py-1 tracking-wide text-white  transition-colors duration-300 transform rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] font-poppins font-medium drop-shadow-8xl h-8 items-center">Já sou parceiro</button>
      </div>
    </div>
  );
};

export default Header;
