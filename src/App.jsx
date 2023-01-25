import { Routes, Route } from "react-router-dom"
import Politiques from "./components/Politiques"
import Blog from "./pages/blog/Blog"
import Post from "./pages/blog/Post"
import PostByCategory from "./pages/blog/PostByCategory"
import Search from "./pages/blog/Search"
import Contact from "./pages/portfolio/Contact"
import Home from "./pages/portfolio/Home"
import NotFound from "./components/NotFound"


function App() {


  return (
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/articles/:slug' element={<PostByCategory />} />
          <Route path='/blog/article/:slug' element={<Post />} />
          <Route path='/blog/articles/search/:slug' element={<Search />} />
          <Route path='/politique-de-confidentialite' element={<Politiques />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

  )
}

export default App
