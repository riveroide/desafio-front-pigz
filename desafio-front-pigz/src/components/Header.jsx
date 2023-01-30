import React from "react";
import LogoPigz from "../lib/Pigz Gestão - Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between h-28 px-4 py-4 items-end fixed bg-white w-full top-0 z-10 md:w-[25%]">
        <div className="mr-0">
        <img src={LogoPigz} alt="/"/>
        </div>
      <div>
        <button className="px-6 py-1 tracking-wide text-white  transition-colors duration-300 transform rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-100 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] font-poppins font-medium h-8 items-center">Já sou parceiro</button>
      </div>
    </div>
  );
};

export default Header;
