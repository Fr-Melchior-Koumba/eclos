import React from 'react'
import { AppBlog, BlogSection, Paginnation } from '../../components/blogComponents'
import Footer from '../../components/Footer'
import ScrollButton from '../../components/ScrollButton'
import SEO from '../../components/SEO'
import { useMyContext } from '../../context/store'




const Blog = () => {
  const { totalPage } = useMyContext()
  return (
    <React.Fragment>
        <SEO
        title='Eclos | Blog de développement web'
        description='Blog pour le développement web, axé sur les langages informatiques' 
        type='blog de développement web'
        name='@FR_melchior'/>

      <div className='bg-primary w-full overflow-hidden'>
        <div className='container mx-auto px-5'>
            <AppBlog />
            <div className='py-[5rem]'>
                <BlogSection />
            </div>
          <Paginnation totalPage={totalPage} />

          <ScrollButton />
        </div>
        <Footer />
      </div>
      
    </React.Fragment>
  )
}

export default Blog