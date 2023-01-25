import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Politiques from "./components/Politiques"
import Contact from "./pages/portfolio/Contact"
import Home from "./pages/portfolio/Home"
import NotFound from "./components/NotFound"
import Blog from "./pages/portfolio/Blog"
import PostByCategory from "./pages/portfolio/PostByCategory"
import Search from "./pages/portfolio/Search"
import Post from "./pages/portfolio/Post"


function App() {


  return (
      <Router>
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
      </Router>
  )
}

export default App
