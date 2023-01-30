import React from "react";
import PigzMarketplaceImg from "../../lib/featurescards/Grupo de máscara 2417.png";

const Card1 = ({ setStep }) => {
  return (
    <div
      className="flex flex-col font-poppins bg-gradient-to-bl from-[#FA641E] to-[#FF881F] rounded-[18%] mx-4 mb-8 transition"
      onClick={() => setStep(2)}
    >
      <p className="text-white font-light py-12 text-center mx-8">
        Além de uma página excusiva, com o Pigz Marketplace sua loja terá mais
        visibilidade, no app e no site. Uma vitrine com milhares de clientes
        todos os dias, pra vender muito mais.
      </p>
      <img src={PigzMarketplaceImg} alt="/" />
    </div>
  );
};

export default Card1;
