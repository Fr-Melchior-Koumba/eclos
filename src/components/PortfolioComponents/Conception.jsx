import React from 'react'
import { conceptions } from '../../constants'
import { styles } from '../../assets/js/styles'
import { Link } from 'react-router-dom'
import { point, rocket } from '../../assets/images'

const Conception = () => {
  return (
    <section id="conception">
        <div className='text-center'>
            <h2 className='text-gradient font-bold text-[22px] ss:text-[40px]'>Ma méthodologie pour la conception <br className='sm:block hidden' /> de votre site web</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-[6rem] mt-[5rem] relative'>
        <img src={rocket} alt="rocket" width={80} height={80} className="absolute z-[0] left-[0] bottom-[14%]" />
            {conceptions.map((conception) => (
                <div key={conception.id} className='w-[400px]'>
                   <div className='flex items-center gap-3'>
                    <span className='text-terciary py-4 px-7 rounded-full span text-[16px] ss:text-[22px] font-bold'>{conception.number}</span>
                    <h1 className='text-white tracking-[1px] capitalize text-[18px] ss:text-[22px]'>{conception.title}</h1>
                   </div>

                   {conception.steps.map((step) => (
                        <div key={step.name} className='flex flex-col gap-3 mt-5 ml-[4rem]'>
                            <div className='flex items-center gap-2'>
                                <img src={point} alt='point' width={20} height={20} />
                                <p className={`${styles.paragraph}`}>{step.step1}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={point} alt='point' width={20} height={20} />
                                <p className={`${styles.paragraph}`}>{step.step2}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={point} alt='point' width={20} height={20} />
                                <p className={`${styles.paragraph}`}>{step.step3}</p>
                            </div>
                            
                        </div>
                   ))}

                </div>
            ))}
        </div>

        <div>
           <div className='text-center py-[5rem]'>
            <h2 className='text-gradient font-bold text-[22px] ss:text-[40px]'>Choisir Eclos</h2>
            <p className='text-white text-[18px] leading-[30px] tracking-[1px]'>Pour l’avancement de votre projet, je pourrais vous aider dans la rédaction <br className='sm:block hidden' /> d’un cahier des charges de site en vous fournissant 
            <Link to='/contact' className='text-gradient'> un devis pour la création de votre site web.</Link></p>
           </div>
           <div className='text-secondary tracking-[1px] flex flex-col gap-3 py-5'>
            <p>Tu as une question ? Tu te demandes si <span className='text-terciary'>Eclos</span> pourra satisfaire ton besoin? <br className='sm:block hidden' /></p>
            <p>Tu voudrais en saoir plus sur les tarifs ?</p>
            <p>N'hésite pas à me joindre directement <span className='text-terciary'>+241 066 74 34 53</span></p>
            <Link to='/contact' className='text-white md:w-[500px] text-center background-gradient py-3 px-6 rounded-xl tracking-[1px] font-semibold mt-5'>
                ou à m'envoyer les grandes lignes de ton projet   
            </Link>
           </div>
        </div>
    </section>
  )
}

export default Conception