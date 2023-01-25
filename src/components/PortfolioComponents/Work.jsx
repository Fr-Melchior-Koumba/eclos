import React from 'react'
import { styles } from '../../assets/js/styles'
import { Link } from 'react-router-dom'
import { work } from '../../assets/images'

const Work = () => {
  return (
    <section id="work" className='py-[8rem]'>
        <div>
            <img src={ work } alt="travail avec eclos" width={1500} height={1100} />
        </div>

        <div className='text-center'>
            <p className={`${styles.paragraph} py-5`}>Votre projet sera le mien, dans la mesure où tous les moyens techniques et <br className='sm:block hidden' /> 
            modernes seront mis à disposition pour vous garantir des résultats satisfaisants. <br className='sm:block hidden' /> 
            Vous avez besoin d’un site internet, pour avoir une visibilité en ligne? C’est très simple il suffit de me contacter. </p>
            <Link to='/contact' className='text-white background-gradient py-3 px-6 rounded-xl tracking-[1px] font-semibold mt-5'>
                Me contacter
            </Link>
        </div>
    </section>
  )
}

export default Work