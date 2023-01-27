import React from "react";

const Form = () => {
  return (
    <div className="flex-col items-center w-7/8 p-4">
      <div className="w-full justify-center">
        <h3 className="flex font-poppins font-semibold text-3xl py-4 w-full justify-center text-[#333333]">
          Quero vender no Pigz
        </h3>
        <p className="font-poppins font-normal text-sm my-2 flex justify-center text-[#333333]">
          Dê o primeiro passo para aumentar suas vendas
        </p>
      </div>

      <form className="w-full">
        <div className="flex-col">
          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">Nome</label>
            <input
              type="text"
              placeholder="  Leonercio Goesfeeld"
              className="w-full h-12 rounded-2xl"
            />
          </div>

          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">
              E-mail
            </label>
            <input type="email" placeholder="  leonercio.goesfeel@gmail.com" className="w-full h-12 rounded-2xl" />
          </div>

          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">Telefone</label>
            <input type="telefone" className="w-full h-12 rounded-2xl" placeholder="  +55 (95)99876-5432" />
          </div>
          <div>
            <p className="font-poppins font-normal text-xs py-4 flex justify-center text-[#333333]">
              Ao continuar, aceito que a Pigz entre em contato comigo por
              telefone, e-mail ou Whatsapp
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-1 tracking-wide text-white  transition-colors duration-300 transform rounded-2xl hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] font-poppins font-medium drop-shadow-8xl h-12 items-center w-full">
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
