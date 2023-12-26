import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import './index.css'

const Router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/netflixClone',
        element: <Home />
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>,
)
