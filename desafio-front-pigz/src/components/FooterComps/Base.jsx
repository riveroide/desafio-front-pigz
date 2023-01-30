import React from 'react'
import OrangeLabLogo from '../../lib/footer/logo-orange-horizontal-branco.svg'

const Base = () => {
  return (
    <div className='pl-4'>
      <div className='flex gap-4 py-4 text-[70%]'>
        <p>Nossos termos</p>
        <p>Privacidade</p>
        <p>Ajuda</p>
      </div>

      <div className='flex justify-between'>
        <div className='text-[55%]'>
          <p>ⓒ Copyright 2021 • Pigz • Todos os direitos reservados</p>
          <p>Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
        </div>
        <img src={OrangeLabLogo} alt="/" className='pr-4'/>
      </div>
    </div>
  )
}

export default Base