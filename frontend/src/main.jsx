import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './HomePage/HomePage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <App/>,
      children:[
          {index: true, element:<HomePage/>}
      ]
  }



]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
