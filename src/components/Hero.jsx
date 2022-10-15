import React from 'react'

const Hero = () => {
  return (
    <section className='flex justify-center items-center h-96 rounded-xl shadow-lg overflow-hidden my-6 relative'>

        <img src="https://images7.alphacoders.com/113/1137731.jpg" alt="" className='w-full h-full object-cover brightness-75 blur-[1px] absolute'/>
         <div className='relative text-light-green-50'>
            <h1 className='text-7xl font-extrabold uppercase'>Studio Ghibli</h1>
            <p className='text-2xl text-center'>usando la api de Ghibli</p>
    
        </div>
    </section>
   
  )
}

export default Hero