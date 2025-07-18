import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './HomePage/HomePage.jsx'
import LoginPage from './LandingPage/LoginPage/LoginPage.jsx'
import MembershipPage from './Nav/MembershipPage/MembershipPage.jsx'
import WriteMessagePage from './Nav/WriteMessagePage/WriteMessagePage.jsx'
import SettingsPage from './Nav/SettingsPage/SettingsPage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import SignupPage from './LandingPage/SignupPage/SignupPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
      children:[
        {index:true,element: <LoginPage/>},
        {path:'/sign-up',element: <SignupPage/>}
      ]
  },
  {
    path: "/login",
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
