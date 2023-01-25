import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { footerLink, linkSociaux } from '../constants'
import { logo, chevron } from '../assets/images'
import { styles } from '../assets/js/styles'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [showForm, setShowForm] =useState(true);

    const schema = yup.object().shape({
        email: yup.string().email('entrez un email valide').required('email invalide')
    })

    const { register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        const email = localStorage.getItem('suscriber');
        if(email){
            setShowForm(false)
        }
    }, [])

    const onSubmit = (data) => {
        emailjs.send('service_v0hfrv3', 'template_t2wcix3', data, 'tjfgxNIeT0TfCOxHq')
        .then((response) => {localStorage.setItem('suscriber', data.email); setShowForm(false)
        reset()
        }, (err) => {
            console.log('error', err)
        })
    }


    
  return (
   <div className={`${styles.padding} w-full bg-[#020711]`}>
     <div className='flex justify-between flex-wrap'>
        <div className='flex flex-col py-5'>
            <img src={logo} alt="logo eclos" width={80} height={80} />
            {footerLink.map(link => (
                <div key={link.id} className='flex items-center mb-5'>
                    <img src={chevron} alt="chevron" />
                    <a href={link.url} className='ml-3 text-[18px] ss:text-[20px] text-secondary hover:underline py-2'>{link.title}</a>
                </div>
            ))}
            <div className='flex gap-3'>
                {linkSociaux.map(link => (
                    <a href={link.link} target="_blank" rel="noopener noreferrer" key={link.id}>
                        <img src={link.img} width={30} height={30} alt={link.name} key={link.id} />
                    </a>
                ))}
            </div>
        </div>

        <div className='flex flex-col py-5'>
            <h1 className='py-5 text-terciary font-bold tracking-[1px] text-[22px] ss:text-[26px]'>NewsLetter</h1>
            {!showForm &&  <h1 className='py-5 text-terciary font-bold tracking-[1px] text-[14px] ss:text-[18px]'>Vous êtes inscrit à la newsLetter</h1>}
            {showForm && <>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='Email' autoComplete='off' required name='email' className='appareance-non tracking-[1px] border-2 bg-primary border-terciary text-white text-sm rounded-l-lg w-[300px] p-2.5' {...register('email')}/>
                <button type='submit' className='bg-terciary tracking-[1px] font-bold p-2.5 rounded-lg mt-3 md:ml-3 md:rounded-r-lg block md:inline-block hover:bg-primary hover:text-terciary'>S'inscrire</button>
                {errors.email && <p className='text-red-500 tracking-[1px]'>{errors.email.message}</p>}
                </form>
            <p className='w-[300px] md:w-[400px] text-justify mt-3 text-secondary tracking-[1px]'>En cliquant sur "S'inscrire", vous acceptez notre <Link className='text-terciary font-bold' to='/politique-de-confidentialite'>politique de confidentialité</Link> décrivant la finalité des traitements de vos données personnelles.</p>
            </>}
            {!showForm && <p className='text-[#023105] font-bold tracking-[1px] text-center bg-[#0dcc17] p-2 rounded-lg'>S'ouscription effectuées</p>}
        </div>


    </div> 

    <div className='text-center border-t-[1px]'>
        <p className='text-white tracking-[1px] pt-5'>Eclos @ 2023 - Tous droits réservés.</p>
    </div>
   </div>
  )
}

export default Footer