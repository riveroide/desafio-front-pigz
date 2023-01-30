import React from "react";
import PigzEntregadoresImg from "../../lib/featurescards/Grupo de máscara 2420.png";

const Card3 = ({ setStep }) => {
  return (
    <div
      className="flex flex-col font-poppins bg-gradient-to-bl from-[#FA641E] to-[#FF881F] rounded-[18%] mx-4 mb-8"
      onClick={() => setStep(4)}
    >
      <p className="text-white font-light py-12 text-center mx-8">
        A ferramenta ideal pra quem tem entrega própia. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.
      </p>
      <img src={PigzEntregadoresImg} alt="/" className="mt-6"/>
    </div>
  );
};

export default Card3;
