import React from 'react'

const Step2 = ({ setStepnum }) => {
  return (
    <div className="flex-col items-center w-7/8 p-4">
      <div className="w-full justify-center">
        <h3 className="flex font-poppins font-semibold text-3xl py-4 w-full justify-center text-[#333333]">
          Onde fica a sua loja?
        </h3>
      
      </div>

      <form className="w-full">
        <div className="flex-col">
          <div className="pb-4 pt-2">
            <label className="font-poppins font-medium text-xs text-[#333333]">CEP</label>
            <input
              type="text"
              placeholder="  000000-00"
              className="w-full h-12 rounded-2xl"
            />
          </div>

          <div className="py-4 flex justify-between">
            <div className='w-2/6'>
            <label className="font-poppins font-medium text-xs text-[#333333]">
              Estado
            </label>
            <input type="email" placeholder="  UF" className="w-full h-12 rounded-2xl" />
            </div>
            <div className='w-3/5'>
            <label className="font-poppins font-medium text-xs text-[#333333]">
              Cidade
            </label>
            <input type="email" placeholder="  Selecione" className="w-full h-12 rounded-2xl" />
            </div>
          </div>

          <div className="py-4">
            <label className="font-poppins font-medium text-xs text-[#333333]">Endereço</label>
            <input type="telefone" className="w-full h-12 rounded-2xl" placeholder="  Avenida Brasil" />
          </div>

          <div className="py-4 flex justify-between">
          <div className='w-2/6'>
            <label className="font-poppins font-medium text-xs text-[#333333]">
              Numero
            </label>
            <input type="email" placeholder="  123" className="w-full h-12 rounded-2xl" />
            </div>
            <div className='w-3/5'>
            <label className="font-poppins font-medium text-xs text-[#333333]">
              Complemento
            </label>
            <input type="email" placeholder="  Sala 1" className="w-full h-12 rounded-2xl" />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-1 tracking-wide text-white  transition-colors duration-300 transform rounded-2xl hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-gradient-to-l from-[#FA641E] to-[#FF881F] font-poppins font-medium drop-shadow-8xl h-12 items-center w-full"
             onClick={()=> setStepnum(3)}>
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Step2