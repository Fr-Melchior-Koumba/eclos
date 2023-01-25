import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {graphcms, QUERY_SLUG_CATEGORIES} from '../../graphql/'
import { useLocation } from 'react-router-dom'

const Hero = () => {


    const [categories, setCategories] = useState([])

    const { pathname } = useLocation()
 
    

    useEffect(() => {
        graphcms.request(QUERY_SLUG_CATEGORIES)
        .then(res => setCategories(res.categories));
    }, []);


  return (
    <div className={`mb-[5rem] w-full`}>
      <ul className='flex w-full items-center flex-wrap'>

        {categories?.map((category) => (
          <li key={category.name} className='px-3 py-3'>
            <Link to={`/blog/articles/${category.slug}`} className={`${`/blog/articles/${category.slug}` === pathname ? 'bg-teal-500 text-primary' : ''} px-5 py-2 text-terciary bg-backgroundOne hover:bg-terciary hover:text-primary px-5 py-2 rounded-full tracking-[1px] capitalize text-[16px] ss:text-[22px]`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Hero