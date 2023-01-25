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
      component: Home,
      exact: true,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/blog/articles/:slug',
      component: PostByCategory,
    },

    {
        path: '/blog/article/:slug',
        component: Post,
      },

      {
        path: '/blog/articles/search/:slug',
        component: Search,
      },

      
      {
        path: '/politique-de-confidentialite',
        component: Politiques,
      },

      
      {
        path: '/contact',
        component: Contact,
      },

      
      {
        path: '*',
        component: NotFound,
      },
  ];


  return (
    
     <main>
        <Routes>
          <Route path={routes.path} element={routes.component} />
        </Routes>
     </main>

  )
}

export default App
