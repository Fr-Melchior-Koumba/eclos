import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'

const PostCard = ({ posts }) => {


  return (
    <div className='flex flex-wrap justify-center gap-5'>
    {posts?.map((post) => (
    <div key={post.id} className='bg-backgroundPost rounded-xl pb-5 w-[500px] h-[800px]'>
        <div className='relative overflow-hidden pb-[1rem]'>
        <img src={post.coverImage.url} alt={post.title} width={500} height={500} className='object-cover rounded-xl'/>
        <div className='flex flex-col ml-[1rem]'>
            <Link to={`/blog/article/${post.slug}`} className='text-terciary capitalize font-bold text-[18px] ss:text-[25px] tracking-[1px] mb-5 text-center px-4'>
            {post.title}
            </Link>
            <span className='text-white text-[16px] ss:text-[18px]'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        
        </div>
        
        </div>
        
      
            <p className={`px-5 font-bold tracking-[1px] inline-block`} style={{background: post.category.color.hex}}>#{post.category.name}</p>
    

        <div className='text-center p-4'>
        <p className='text-xl ss:text-[18px] tracking-[1px] text-justify text-secondary'>{post.excerpt}</p>
        </div>

        <div className='flex justify-end w-full px-5 items-center mt-3'>
        <img src={post.author.photo.url} alt={post.author.name} width={60} height={80} />
        </div>
    
    </div>
    ))}
    </div>
  )
}

export default PostCard