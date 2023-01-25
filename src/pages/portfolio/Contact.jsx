import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import {yupResolver} from '@hookform/resolvers/yup'
import { Header } from '../../components/PortfolioComponents'
import { styles } from '../../assets/js/styles'
import { map } from '../../assets/images'
import { contactInfos } from '../../constants'
import Footer from '../../components/Footer'

const Contact = () => {

  const [success, setSuccess] = useState(false)


  const schema = yup.object().shape({
    name: yup.string().required('le nom est requis'),
    email: yup.string().email().required('email invalide'),
    phone: yup.string().matches(/^\d+$/, 'uniquement des chiffres de 9 caractères max').min(8, 'au moins 8 caractères').max(9, 'au plus 9 caractères').required('uniquement des chiffres de 9 caractères max'),
    message: yup.string().required('ajoutez un message')
  })

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(schema),
    
  })

  const onSubmit = (data) => {
    emailjs.send('service_v0hfrv3', 'template_yaoa29m', data, 'tjfgxNIeT0TfCOxHq')
    .then((response) => { setSuccess(true)
      reset()
  }, (err) => {
    console.log('error', err)
  })
    console.log(data)

  }


  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className='container mx-auto px-5'>
        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Header />
            </div>
        </div>
          <img src={map} alt="carte" />
          <div className=''>
            <p className='text-center text-white py-5 tracking-[1px]'>Donnez un maximum d'informations sur votre projet, insistez sur les grands points, 
            afin que je puisse avoir une idée au préalable sur le service qui devra être effectué 
            et de fixer en amont un tarif à titre préventif.</p>

            <div className='mt-[3rem] mb-[3rem] flex justify-around gap-5 flex-wrap'>
                <div className='flex items-start h-[290px] flex-col gap-5 bg-terciary p-5 rounded-lg'>
                  <h1 className='text-[25px] ss:text-[28px]'>Informations de contact</h1>
                  {contactInfos.map(contact => (
                    <div key={contact.id} className='flex items-center gap-3'>
                      <img src={contact.img} alt={contact.title} width={30} height={30} />
                      <p className='font-bold tracking-[1px]'>{contact.title}</p>
                    </div>
                  ))}
                </div>

                <div>
                  { success && <p className='text-[#023105] font-bold tracking-[1px] text-center bg-[#0dcc17] p-3 rounded-lg'>Votre message a bien été réçu, je vous recontacte dans quelques instants.</p>}
                  <form onSubmit={handleSubmit(onSubmit)} className='sm:w-[500px] w-[350px] mx-auto'>
                      <div className='py-5'>
                        <input type="text" placeholder='Nom et Prénom' autoComplete='off' name='name' required className='w-full bg-transparent border-[1px] border-terciary p-3 rounded-xl text-white tracking-[1px] focus:outline-none focus:border-blue-500' {...register('name')}/>
                        {errors.name && <p className='text-red-500 tracking-[1px]'>{errors.name.message}</p>}
                      </div>
                      <div className='py-5'>
                        <input type="email" placeholder='Email' name='email' autoComplete='off' required className='w-full bg-transparent border-[1px] border-terciary p-3 rounded-xl text-white tracking-[1px] focus:outline-none focus:border-blue-500' {...register('email')}/>
                        {errors.email && <p className='text-red-500 tracking-[1px]'>{errors.email.message}</p>}
                      </div>
                      <div className='py-5'>
                        <input type="text" placeholder='Téléphone' name='phone' autoComplete='off' required className='w-full bg-transparent border-[1px] border-terciary p-3 rounded-xl text-white tracking-[1px] focus:outline-none focus:border-blue-500' {...register('phone')}/>
                        {errors.phone && <p className='text-red-500 tracking-[1px]'>{errors.phone.message}</p>}
                      </div>
                      <div className='py-5'>
                       <textarea placeholder='Message' type="text" name='message' required className='resize-none w-full bg-transparent border-[1px] border-terciary p-3 h-[450px] rounded-xl text-white tracking-[1px] focus:outline-none focus:border-blue-500' {...register('message')} />
                       {errors.message && <p className='text-red-500 tracking-[1px]'>{errors.message.message}</p>}
                      </div>
                      <button type="submit" className='bg-terciary border-0 text-primary p-3 font-bold tracking-[1px] rounded-lg block w-full hover:bg-[#0b8b81]'>Obtenir un devis</button>
                  </form>
                </div>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact