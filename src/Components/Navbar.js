import React, {useState} from 'react'
import {Nav, Bars, NavLink, NavMenu, NavMenuMobile} from './NavbarElements'

const Navbar = () => {

    const [menuHamb, setMenuHamb] = useState(false)

    const showMenu = () => setMenuHamb(!menuHamb)

    return (
        <>
            <div>
                <Nav className={menuHamb ? "nav-menu active" : "nav-menu"}>
                    <NavLink to="/">
                        <h1>Logo</h1>
                    </NavLink>
                    <Bars onClick={showMenu} />
                    <>
                        <NavMenu>
                            <NavLink to="/About" activeStyle> About </NavLink>
                            <NavLink to="/Projects" activeStyle> Projects </NavLink>
                            <NavLink to="/Experience" activeStyle> Experience </NavLink>
                            <NavLink to="/Contact" activeStyle> Contact </NavLink>
                        </NavMenu>
                        {
                            menuHamb ?
                            <NavMenuMobile className="nav-mobile">
                                <NavLink to="/About" activeStyle> About </NavLink>
                                <NavLink to="/Projects" activeStyle> Projects </NavLink>
                                <NavLink to="/Experience" activeStyle> Experience </NavLink>
                                <NavLink to="/Contact" activeStyle> Contact </NavLink>
                            </NavMenuMobile> : null
                        }
                    </>
                    {/* <NavBtn>
                        <NavBtnLink to="/Signin">Sign in</NavBtnLink>
                    </NavBtn> */}
                </Nav>
            </div>
        </>
    )
}

export default Navbar