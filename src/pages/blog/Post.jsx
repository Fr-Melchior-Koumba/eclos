import React from 'react'
import { AppBlog, PostDisplay } from '../../components/blogComponents'
import Footer from '../../components/Footer'

import { QUERY_ONE_POST } from '../../graphql'
import useQueryPosts from '../../hooks/useQueryPosts'


const Post = () => {

    const { posts, error } = useQueryPosts({ query: QUERY_ONE_POST})
    if(error) return <p>{error}</p>




  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className='container mx-auto px-5'>
            <AppBlog />
            <div className='py-[5rem]'>
                {posts?.map(post => (
                    <div key={post.id}>
                        <PostDisplay post={post} />
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
  
}

export default Post