import React from 'react'

const Step3 = ({ setStepnum }) => {
  return (
    <div className="flex-col items-center w-7/8 p-4">
      <div className="w-full justify-center">
        <h3 className="flex font-poppins font-semibold text-3xl py-4 w-full justify-center text-[#333333]">
          Me conta um pouco sobre sua loja
        </h3>
      </div>

      <form className="w-full">
        <div className="flex-col">
          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">Nome da loja</label>
            <input
              type="text"
              placeholder="  Restaurante Todo Mundo Gosta"
              className="w-full h-12 rounded-2xl"
            />
          </div>

          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">
              CNPJ da loja
            </label>
            <input type="email" placeholder="  12.345.678/0001-99" className="w-full h-12 ronded-2xl" />
          </div>

          <div className="py-4 mb-16">
            <label className="font-poppins font-medium text-xs text-[#333333]">Tipo da loja</label>
            <input type="telefone" className="w-full h-12 rounded-2xl" placeholder="  Selecione" />
          </div>
        
          <div className="flex justify-center">
            <button className="px-6 py-1 tracking-wide text-white  transition-colors duration-300 transform rounded-2xl hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] font-poppins font-medium drop-shadow-8xl h-12 items-center w-full"
             onClick={()=> setStepnum(1)}>
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Step3