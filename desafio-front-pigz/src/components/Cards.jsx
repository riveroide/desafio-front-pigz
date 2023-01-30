import React from "react";
import ImpressImage from "../lib/cards/print_black_24dp.svg";
import PigzImage from "../lib/cards/Grupo 3545.svg";
import MarketingImage from "../lib/cards/storefront_black_24dp.svg";
import EasyImage from "../lib/cards/smartphone_black_24dp.svg";

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[#333333] font-poppins gap-8">
      <div className="flex flex-col items-center bg-[#FAFAFA] p-8 rounded-[28%] hover:border-solid hover:border-2 hover:border-[#9F9F9F] hover:transition duration-300 w-[60%]">
        <img className="pb-4" src={MarketingImage} alt="/" />
        <h2 className="font-semibold">Marketplace</h2>
        <p className="text-sm">Pra sua loja vender mais</p>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] p-8 rounded-[28%] hover:border-solid hover:border-2 hover:border-[#9F9F9F] hover:transition duration-300 w-[60%]">
        <img className="pb-4" src={EasyImage} alt="/" />
        <h2 className="font-semibold">É fácil e rápido</h2>
        <p className="text-sm">Fazer um pedido no Pigz</p>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] p-8 rounded-[28%] hover:border-solid hover:border-2 hover:border-[#9F9F9F] hover:transition duration-300 w-[60%]">
        <img className="pb-4" src={PigzImage} alt="/" />
        <h2 className="font-semibold">Pigz Gestão</h2>
        <p className="text-sm">Você no controle, sempre</p>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] p-8 rounded-[28%] hover:border-solid hover:border-2 hover:border-[#9F9F9F] hover:transition duration-300 w-[60%]">
        <img className="pb-4" src={ImpressImage} alt="/" />
        <h2 className="font-semibold">Vias de impressão</h2>
        <p className="text-sm">Personalizáveis</p>
      </div>
    </div>
  );
};

export default Cards;
