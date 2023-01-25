import { useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useMyContext } from '../context/store'
import { graphcms } from '../graphql'


const useQueryPosts = ({ query, limit = 10 }) => {

    const {slug} = useParams()
    const { search, pathname } = useLocation()

    const page = Number(new URLSearchParams(search).get('page'))|| 1
    const skip = (page - 1) * limit

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [statusQuery, setStatusQuery] = useState('')

    const { setLoading, setTotalPage } = useMyContext()
    

    useEffect(() => {
        setTotalPage(1)
    }, [pathname, setTotalPage])

    useEffect(() => {
        setStatusQuery('start')
        setLoading(true)
        graphcms.request(query, {slug, limit, skip}).then(res => {
            setStatusQuery('success')
            const count = res?.countConnection?.aggregate?.count || 0
            setTotalPage(Math.ceil(count/ limit))
            setPosts(res.posts)
            setError(null)
        })
        .catch(error => {
            setStatusQuery('error')
            setTotalPage(1)
            setError(error.message)
            setPosts([])
        })
        .finally(() => setLoading(false))
    }, [query, slug, limit, skip, setLoading, setTotalPage])

    

  return { posts, error, statusQuery}
}

export default useQueryPosts