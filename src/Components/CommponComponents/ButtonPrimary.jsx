import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ButtonPrimary = ({label, id}) => {
  return (
    <button id={id} className='flex'>
      <span className='rounded-3xl px-6 py-1.5 border-heroGreen border-3 text-navGreen font-semibold cursor-pointer hover:bg-heroGreen hover:text-black'>{label}</span><span className='rounded-full border-heroGreen border-3 py-1.5 px-1.5 text-xl text-navGreen font-semibold cursor-pointer hover:bg-heroGreen hover:text-black'><FiArrowUpRight /></span>
    </button>
  )
}

export default ButtonPrimary
