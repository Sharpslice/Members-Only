import { Outlet } from "react-router-dom"

function LandingPage(){
    return(
        <div className="landing-container">
            <Outlet/>
        </div>
        
    )
}

export default LandingPage