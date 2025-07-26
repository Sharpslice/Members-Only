import { NavLink } from "react-router-dom"

import './Header.css'
import Dropdown from "../components/Dropdown"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider"




function Header(){

    const {setIsAuthenticated} =useContext(AuthContext);

    const logout = async()=>{
        await axios.post(`http://localhost:3000/auth/log-out`,{},{withCredentials:true})
        setIsAuthenticated(false);
    }
    return(
        <header className="header">

            <nav className="header__nav">
                <NavLink className="header__button" to="write-a-msg">Write a message</NavLink>
                <NavLink className="header__button" to="/">Message board</NavLink>
                <NavLink className="header__button" to="membership-sign-up">Become a member</NavLink>
                {/* <NavLink className="header__button" to="settings">Settings</NavLink> */}
                <Dropdown
                    className={"header__dropdown"}
                    title="Settings"
                    items={
                        [
                            {title:'account settings',path:'/settings',onFunctionCall:null},
                            {title:'log-out',path:'/login',onFunctionCall: logout}
                        ]
                    }
                    
                />
            </nav>

        </header>
    )
}
export default Header