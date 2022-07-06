import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';


export default function Navbar() {
    return (
        <div>
            <Nav>
            <NavMenu>
                <NavLink to="/Home" activeStyle>
                Home
                </NavLink>
                <NavLink to="/LandingPage" activeStyle>
                Landing Page
                </NavLink>
                <NavLink to="/Login" activeStyle>
                Login
                </NavLink>
                <NavLink to="/Sounds" activeStyle>
                Sounds
                </NavLink>
            </NavMenu>
            </Nav>
        </div>
    );
};

