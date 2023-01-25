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

  const routes = [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/blog',
      element: Blog,
    },
    {
      path: '/blog/articles/:slug',
      element: PostByCategory,
    },

    {
        path: '/blog/article/:slug',
        element: Post,
      },

      {
        path: '/blog/articles/search/:slug',
        element: Search,
      },

      
      {
        path: '/politique-de-confidentialite',
        element: Politiques,
      },

      
      {
        path: '/contact',
        element: Contact,
      },

      
      {
        path: '*',
        element: NotFound,
      },
  ];


  return (
    
     <main>
        <Routes>
          <Route path={routes.path} element={routes.element} />
        </Routes>
     </main>

  )
}

export default App
