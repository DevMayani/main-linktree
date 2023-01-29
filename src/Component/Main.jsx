import React from 'react'

const Main = () => {
  return (
      <div className='mt-10'>
        <div className='flex justify-center items-center font-semibold '>
        <p className='text-white'>My Social Networks</p>
        </div>
        <div className='flex justify-center items-center mt-3'>
      <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        <a href='https://twitter.com/jojo_mayani'>Twitter</a>
        </button>
        </div>
        <div className='flex justify-center items-center'>
        <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        <a href='http://www.linkedin.com/in/devmayani'>LinkedIn</a>
        </button>
        </div>
        <div className='flex justify-center items-center'>
        <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        <a href='https://www.instagram.com/jojo_mayani/'>Instagram</a>
        </button>
        </div>
        <div className='flex justify-center items-center'>
        <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        <a href='http://github.com/devmayani'>Github</a>
        </button>
        </div>
        <div className='flex justify-center items-center'>
        <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        Whatsapp
        </button>
        </div>
        <div className='mt-5'>
          <div className='flex justify-center items-center font-semibold'>
          <p className='font-bold text-white'>My BLOG</p>
          </div>
        <div className='flex justify-center items-center mt-2 '>
        <button className='w-[50%] border bg-transparent px-8 py-2 mb-4 rounded-2xl text-white font-bold md:w-[20%]'>
        Medium
        </button>
        </div>

        </div>
      </div>
    
  )
}

export default Main
