import React from 'react'
import { advantages } from '../../constants'



const Advantage = () => {
  return (
    <section id="advantage" className='py-16'>
      <div className='flex items-center justify-center md:justify-between gap-5 flex-wrap'>
        {advantages.map((advantage) => (
          <div key={advantage.id} className='w-[300px] flex flex-col items-center md:h-[300px]'>
            <img src={advantage.img} alt={advantage.name} width={60} height={60} />
            <h1 className='text-white font-bold capitalize text-[16] ss:text-[22px] py-3'>{advantage.name}</h1>
            <p className='text-secondary text-center tracking-[1px]'>{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Advantage