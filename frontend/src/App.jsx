import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import './App.css'

function App() {
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
