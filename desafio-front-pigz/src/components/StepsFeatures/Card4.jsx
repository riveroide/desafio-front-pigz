import React from 'react'
import OnlinePaymentImg from "../../lib/featurescards/mobile.png";

const Card4 = ({ setStep }) => {
  return (
    <div
      className="flex flex-col font-poppins bg-gradient-to-bl from-[#FA641E] to-[#FF881F] rounded-[18%] mx-4 mb-8"
      onClick={() => setStep(1)}
    >
      <p className="text-white font-light py-12 text-center mx-8">
        Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.
      </p>
      <img src={OnlinePaymentImg} alt="/" />
    </div>
  )
}

export default Card4