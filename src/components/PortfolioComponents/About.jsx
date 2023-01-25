import React from 'react'
import { styles } from '../../assets/js/styles'
import { reactjs, js, nodejs, typescript, tailwind, fr_melchior } from '../../assets/images'

const About = () => {
  return (
    <section id="à propos" className='flex md:flex-row flex-col'>
      <div className={`${styles.flexStart} flex-1 flex-col`}>
        <h2 className='w-full flex flex-row justify-between items-center text-gradient font-bold text-[22px] ss:text-[40px]'>Qui suis-je ?</h2>
        <h1 className='text-white text-[28px] ss:text-[42px] font-semibold'>François Melchior</h1>
        <h2 className='font-bold text-[20px] ss:text-[32px] text-gradient'>Développeur Full-Stack JavaScript</h2>
        <div className='flex w-full justify-between flex-wrap py-6'>
          <img src={js} alt="javascript" width={50} height={50} />
          <img src={reactjs} alt="reactjs" width={50} height={50} />
          <img src={tailwind} alt="tailwindcss" width={50} height={50} />
          <img src={typescript} alt="typescript" width={50} height={50} />
          <img src={nodejs} alt="nodejs" width={50} height={50} />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-1`}>
        <img src={fr_melchior} width={350} height={350} />
      </div>
    </section>
  )
}

export default About