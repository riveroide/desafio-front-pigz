import React from "react";

const CardsWithButtons = () => {
  return (
    <div>
      <div>
        <div className="bg-[#FAFAFA] font-poppins flex flex-col m-4 p-4 rounded-[15%]">
          <div className="pt-8 px-8 pb-4">
            <div>
              <h2 className="text-[#333333] font-bold text-xl mb-1">Pigz</h2>
              <p className="text-[#666666] font-medium">
                Tudo o que você precisa
              </p>
            </div>

            <div className="text-[#333333] text-xs flex flex-col gap-2 mt-4">
              <p>Pigz Marketplace</p>
              <p>Página excusiva</p>
              <p>Pigz Gestão Desktop e Mobile</p>
              <p>Gestão de entregadores</p>
              <p>Vías de impressão personalizáveis</p>
            </div>

            <div className="font-bold text-lg text-[#333333] mt-8 ml-4 bg-[#FFFFFF] rounded-full w-fit p-3">
              <p>R$199/mês</p>
            </div>
          </div>
          <div className="justify-center flex mb-4">
            <button className="text-white  transition-colors duration-300 transform rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] text-sm font-medium h-12 w-[80%]">
              Vender no Pigz agora
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#FAFAFA] font-poppins flex flex-col m-4 p-4 rounded-[15%]">
          <div className="pt-8 px-8 pb-4">
            <div>
              <h2 className="text-[#333333] font-bold text-xl mb-1">Pagamento On-line</h2>
              <p className="text-[#666666] font-medium">
                Segurança e agilidade
              </p>
            </div>

            <div className="text-[#333333] text-xs flex flex-col gap-2 mt-4">
              <p>Aceite Pix e Cartão de Crédito</p>
              <p>Antecipação Pix automática</p>
              <p>Não dependa de maquininha de cartão</p>
              <p>Segurança para receber pedidos</p>
              <p>Agilidade para entregar</p>
            </div>

            <div className="font-bold text-lg text-[#333333] mt-8 ml-4 bg-[#FFFFFF] rounded-full w-fit p-3">
              <p>2,99% por transação</p>
            </div>
          </div>
          <div className="justify-center flex mb-4">
            <button className="text-white  transition-colors duration-300 transform rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] text-sm font-medium h-12 w-[80%]">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWithButtons;
