import React from 'react'
import { styles } from '../../assets/js/styles'
import { prestations } from '../../constants'

const Tools = () => {
  return (
    <section id="prestations">
      <div className='text-center'>
      <h2 className='w-full text-gradient font-bold text-[22px] ss:text-[40px]'>Mes Prestations</h2>
      <p className={`${styles.paragraph}`}>Eclos propose, une gamme de prestation assez complète <br className='sm:block hidden' />
pour que vous puissiez trouvez ce qui correspond à votre besoin.</p>
      </div>

      <div className='flex flex-wrap justify-center gap-5 py-5'>
        {prestations.map((prestation) => (
          <div key={prestation.id} className='bg-[#010713] rounded-xl p-5 w-[300px] h-[300px] bg-shadow'>
              <img src={prestation.img} alt={prestation.title} width={30} height={30} />
              <h1 className='text-white text-[22px] ss:text[32px] font-semibold tracking-[1px] py-3'>{prestation.title}</h1>
              <p className={`${styles.paragraph}`}>{prestation.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools