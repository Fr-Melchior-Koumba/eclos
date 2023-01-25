import React from 'react'
import { Link } from 'react-router-dom'
import { error } from '../assets/images'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <img src={error} width={500} height={500} alt="error page 404" />
        <p className='text-[28px] ss:text-[35px] text-white'>Page introuvable</p>
        <Link to='/blog' className='text-terciary tracking-[1px] text-[20px] ss:text-[28px]'>Revenir à l'accueil</Link>
    </div>
  )
}

export default NotFound