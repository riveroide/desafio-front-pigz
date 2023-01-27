import React from "react";
import BurgerPic from "../lib/Grupo de máscara 2405.png";
import Form from "./Form";
const BusinessForm = () => {
  return (
    <div className="bg-gradient-to-br from-[#FA641E] to-[#FF881F]  pb-8">
      <div>
        <div className="h-12 absolute w-4/5">
          <p className="font-poppins font-bold text-white text-4xl py-8 px-4 text-left mt-4">
            Pigz: tudo que você precisa pra vender ainda mais!
          </p>
        </div>
        <div className="flex relative justify-end left-20">
          <img src={BurgerPic} alt="burgerpic" />
        </div>
      </div>
      <div className="p-4 mb-8">
        <p className="text-white font-poppins font-normal">
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja prontinha para iniciar as vendas
        </p>
      </div>
      <div className="rounded-3xl bg-white mx-4 mb-16">
        <Form/>
      </div>
    </div>
  );
};

export default BusinessForm;
