import { NavLink } from "react-router-dom"

import './Header.css'
import Dropdown from "../components/Dropdown"
function Header(){
    return(
        <header className="header">

            <nav className="header__nav">
                <NavLink className="header__button" to="write-a-msg">Write a message</NavLink>
                <NavLink className="header__button" to="/">Message board</NavLink>
                <NavLink className="header__button" to="membership-sign-up">Become a member</NavLink>
                {/* <NavLink className="header__button" to="settings">Settings</NavLink> */}
                <Dropdown
                    className={"header__dropdown"}
                    title="settings"
                    items={
                        [
                            {title:'account settings',path:'/',onFunctionCall:null},
                            {title:'log-out',path:'/login',onFunctionCall: console.log('hey')}
                        ]
                    }
                    
                />
            </nav>

        </header>
    )
}
export default Header