import React from 'react'
import { QUERY_POSTS } from '../../graphql'
import useQueryPosts from '../../hooks/useQueryPosts'
import PostCard from './PostCard'
import PostNotFoud from './PostNotFoud'


const BlogSection = () => {

  const { posts, error, statusQuery } = useQueryPosts({query: QUERY_POSTS})
  if(statusQuery === 'success' && posts.length ===0 ) return <PostNotFoud />

  if(error) return <p>{error}</p>



  return (
    <PostCard posts={posts} />
  )
}

export default BlogSection