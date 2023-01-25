import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../assets/js/styles'
import { imageScroll } from '../../constants'
import { stars } from '../../assets/images'

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col'>
        <div className={`${styles.flexStart} flex-col`}>
            <div className='flex flex-row'>
                <img src={stars} alt='évaluation' width={120} height={120} />
            </div>
            <div className='flex flex-row w-full items-center'>
                <p className={`${styles.paddingY} font-semibold text-secondary text-[16px] ss:text-[18px] tracking-[2px] ss:tracking-[1px]`}>Satisfait ou Remboursé</p>
            </div>
            <div className={`flex flex-row justify-between items-center w-full`}>
                <h1 className={`flex-1 ss:text-[72px] text-[52px] text-gradient font-bold ss:leading-[90px] leading-[75px]`}>
                    Ayez le site web <br className='sm:block hidden' />{' '}
                    de vos rêves en<br />
                    un seul click.
                </h1>
            </div>

            <div className='flex flex-row items-center w-full'>
                <Link to='/contact' className='text-white background-gradient py-3 px-6 rounded-xl tracking-[1px] font-semibold mt-5'>
                    Demander un devis   
                </Link>
            </div>

            <p className='flex flex-row items-center w-full py-5 text-secondary tracking-[1px]'>
                Les sites web les plus modernes et complets jamais crées.
            </p>
        </div>

        <div className={`${styles.flexCenter} flex flex-1 md:my-0 my-10`}>
            <div className='relative overflow-hidden w-[100%] h-[100%]'>
                <div className='flex inset-0 anim-images'>
                    {imageScroll.map((img) => (
                        <img key={img.id} src={img.img} alt={img.name} width={250} height={500} className='w-[250px] h-[500px] object-cover mr-5 z-[5]' />
                    ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero