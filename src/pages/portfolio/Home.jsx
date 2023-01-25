import React from 'react'
import { styles } from '../../assets/js/styles'
import { About, Advantage, Conception, Header, Hero, Project, Tools, Work } from '../../components/PortfolioComponents'
import Footer from '../../components/Footer'
import ScrollButton from '../../components/ScrollButton'
import SEO from '../../components/SEO'


const Home = () => {
  return (
     <React.Fragment>
        <SEO 
        title='Eclos | Création de site web'
        description='Plateforme de développement de site web' 
        type='site de développement web'
        name='@FR_melchior'/>

      <div className='bg-primary w-full overflow-hidden'>
        <div className='container mx-auto px-5'>
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header />
                </div>
            </div>

            <div className={`${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`${styles.flexStart}`}>
              <div className={`${styles.boxWidth} `}>
                <Advantage />
                <About />
                <Project />
                <Tools />
                <Work />
                <Conception />
              </div>
            </div>
            <ScrollButton />

        </div>
        <Footer />
      </div>
     </React.Fragment>
  )
}

export default Home