import React from 'react'
import Image from '../Assets/jojoimg4.jpeg'

const Header = () => {
  return (
    <div className='m-auto'>
      <div className='flex justify-center items-center '>
     <img src={Image} alt="pic" className='w-[200px] h-[200px] rounded-full' />
     </div>
     <div className=''>
      <div className='w-[50%] m-auto mt-2 text-red-300 md:w-[20%] '>
     <p className='flex justify-center items-center font-bold bg-white h-8'>Hi, I'm Josephine</p>
     </div>
     <div className='w-[70%] m-auto mt-2 md:w-[50%] '>
     <p className='flex justify-center items-center font-bold mt-1 text-white'>I'm a Frontend Developer</p>
     </div>
     
      
      </div>
    </div>
  )
}

export default Header
