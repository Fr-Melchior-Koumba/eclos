import React from 'react'
import { AppBlog, Paginnation, PostCard } from '../../components/blogComponents'
import PostNotFoud from '../../components/blogComponents/PostNotFoud'
import Footer from '../../components/Footer'
import ScrollButton from '../../components/ScrollButton'
import { useMyContext } from '../../context/store'
import { QUERY_POSTS_BY_CATEGORY } from '../../graphql'
import useQueryPosts from '../../hooks/useQueryPosts'


const PostByCategory = () => {

  const { totalPage } = useMyContext()
   
    const { posts, error, statusQuery } = useQueryPosts({ query: QUERY_POSTS_BY_CATEGORY})
    if(error) return <p>{error}</p>



  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className='container mx-auto px-5'>
            <AppBlog />
            { (statusQuery === 'success' && posts.length ===0 ) ? <PostNotFoud /> : ''}
            <div className='py-[5rem]'>
                <PostCard posts={posts} />
            </div>
            <Paginnation totalPage={totalPage} />
            <ScrollButton />
        </div>
        <Footer />
    </div>
  )
}

export default PostByCategory