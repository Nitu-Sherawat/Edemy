import React from 'react'

const Hero = () => {
  return (
    <div className ='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px=7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3x1 mx-auto'> Empower your future with the courses designed to <span className='text-blue-600'>
        fit your choice</span><img src="{assets.sketch}" alt="sketch"
        className='md:block hidden absolute -bottom-7 right-0'/></h1>

        <p className='md:black hidden text-gray-500 max-w-2x1 mx-auto'>
          We bring together world-class intructors , interactive content , and a supportive community to help you achieve your personal and professional goals.
        </p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
          We bring together world-class intructors to help you achieve your professional goals.
        </p>
    </div>
  ) 
}

export default Hero
