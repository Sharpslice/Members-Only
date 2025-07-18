import { NavLink } from "react-router-dom"

import './Header.css'
function Header(){
    return(
        <header className="header">

            <nav className="header__nav">
                <NavLink className="header__list" to="">Write a message</NavLink>
                <NavLink className="header__list" to="">Message board</NavLink>
                <NavLink className="header__list" to="">Become a member</NavLink>
                <NavLink className="header__list" to="">Settings</NavLink>
            </nav>

        </header>
    )
}
export default Header