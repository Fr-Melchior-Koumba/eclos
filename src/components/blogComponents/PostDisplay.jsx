import React from 'react'
import moment from 'moment/moment'


const PostDisplay = ({ post }) => {
    
  return (
    <article className='w-full'>
        <div>
            <h1 className='text-white text-center text-[28px] ss:text-[45px] capitalize'>{post.title}</h1>
            <img src={post.author.photo.url} alt="eclos" width={45} height={45} />
            <span className='text-gray-500 text-[16px] block ss:text-[18px] py-3'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <p className={`px-5 mb-3 font-bold tracking-[1px] inline-block`} style={{background: post.category.color.hex}}>#{post.category.name}</p>
        </div>
        <img src={post.coverImage.url} alt={post.title} />
        <div>
            <p className='text-gray-300 tracking-[1px] leading-[2rem] py-3 text-justify' dangerouslySetInnerHTML={{__html: post.content.html}}></p>
        </div>

    </article>
  )
}

export default PostDisplay