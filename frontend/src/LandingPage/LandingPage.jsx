import { Outlet } from "react-router-dom"
import './LandingPage.css'
function LandingPage(){
    return(
        <div className="landing-container">
            <Outlet/>
        </div>
        
    )
}

export default LandingPage