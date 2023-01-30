import React from "react";
import PigzGestaoImg from "../../lib/featurescards/Grupo de máscara 2418.png";

const Card2 = ({ setStep }) => {
  return (
    <div
      className="flex flex-col font-poppins bg-gradient-to-bl from-[#FA641E] to-[#FF881F] rounded-[18%] mx-4 mb-8 transition"
      onClick={() => setStep(3)}
    >
      <p className="text-white font-light py-12 text-center mx-8">
        Acompanhe suas vendas em tempo real, no computador ou no celular, de
        onde estiver. Faça alterações de preços e disponibilidade de produtos
        rapidamente, como deve ser.
      </p>
      <img src={PigzGestaoImg} alt="/" />
    </div>
  );
};

export default Card2;
