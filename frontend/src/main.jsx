import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './HomePage/HomePage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
import MembershipPage from './Nav/MembershipPage/MembershipPage.jsx'
import WriteMessagePage from './Nav/WriteMessagePage/WriteMessagePage.jsx'
import SettingsPage from './Nav/SettingsPage/SettingsPage.jsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <App/>,
      children:[
          {index: true, element:<HomePage/>},
          {path: "write-a-msg", element: <WriteMessagePage/>},
          {path: "membership-sign-up", element: <MembershipPage/>},
          {path: "settings", element: <SettingsPage/>}
      ]
  }



]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
