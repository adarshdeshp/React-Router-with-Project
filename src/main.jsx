import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Contact from './components/contactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/github.jsx'

const router=createBrowserRouter([
  {path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"user/:id",
      element:<User/>
    },
    {
      path:"github",
      element:<GitHub/>
    },
  ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
