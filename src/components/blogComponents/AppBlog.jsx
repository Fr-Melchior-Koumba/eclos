import React from 'react'
import { styles } from '../../assets/js/styles'
import { useMyContext } from '../../context/store'
import Header from './Header'
import Hero from './Hero'
import Loading from './Loading'
import Paginnation from './Paginnation'
import Search from './Search'


const AppBlog = () => {

  const {loading} = useMyContext()
  
  return (
    <div className='relative'>
     { loading &&  <Loading /> }
      <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Header />
            </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
            <Search />
        </div>
      </div>

    
    </div>
  )
}

export default AppBlog