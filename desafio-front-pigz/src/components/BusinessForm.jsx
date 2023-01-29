import React from "react";
import BurgerPic from "../lib/burger_fix.png";
import Form from "./Form";
const BusinessForm = () => {
  return (
    <div className="bg-gradient-to-br from-[#FA641E] to-[#FF881F] pb-8">
      <div>
        <div className="h-12 w-4/5">
          <p className="font-poppins font-bold text-white text-4xl pt-8 px-4 text-left mt-4 leading-tight">
            Pigz: tudo que você precisa pra vender ainda mais!
          </p>
        </div>
        <div className="flex relative justify-end bottom-12 bg-clip-content">
          <img src={BurgerPic} alt="burgerpic"/>
        </div>
      </div>
      <div className="p-4 mb-4 -mt-16">
        <p className="text-white font-poppins font-normal text-left">
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja prontinha para iniciar as vendas
        </p>
      </div>
      <div className="rounded-3xl bg-white mx-4 mb-16 h-128">
        <Form/>
      </div>
    </div>
  );
};

export default BusinessForm;
