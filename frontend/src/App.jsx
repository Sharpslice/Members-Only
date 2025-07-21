import { Outlet, useNavigate } from "react-router-dom"
import Header from "./Header/Header"
import './App.css'
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { useEffect } from "react"

function App() {
  const {isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
      if(!isAuthenticated){
        navigate('/login')
    } 
  })
  if(!isAuthenticated) return null;
  return (
    <>
      <Header/>

      <div className="main-container">
          <Outlet/>
      </div>
      
    </>
  )
}

export default App
